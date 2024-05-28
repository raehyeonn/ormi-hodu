const exploreWrap = document.querySelector('.explore');
const exploreBtn = document.querySelector('.exploreButton');
let pageNum = 1; // page 기본 값을 1로 설정,

// fetchImages가 실행되는 부분
exploreBtn.addEventListener('click', () => {fetchImages(pageNum += 1)});

async function fetchImages(page) {
    try {
        // 통신이기 때문에 비동기로 작동한다. 그러면 밑에 코드를 기다리게 하기위해 await/async를 사용한다.
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`); // 버튼을 누르면 page값이 바뀜.

        // 예외 처리
        if(!response.ok) {
            throw new Error('네트워크 응답에 문제가 발생했습니다.');
        }

        // json 데이터를 JavaScript 객체로 파싱
        // json() 함수도 비동기로 작동하니 await 키워드 필요
        const datas = await response.json(); // 여기서 실행 마무리, 데이터 자체 형태는 array, 안에 3개의 객체
        makePhotoWalls(datas);
    } catch(error) {
        console.error(error);
    }
}

function makePhotoWalls(datas) {
    // 배열 처리 전 div 요소 생성
    const $divElement = document.createElement("div");
    $divElement.setAttribute("class", "photoWall");

    // 배열을 순환하며 처리
    datas.forEach((data) => {
        const $img = document.createElement("img");
        $img.setAttribute("src", data.download_url);
        $img.setAttribute("alt", "");
        $img.setAttribute("class", "picture");

        $divElement.appendChild($img);
    });
    exploreWrap.before($divElement);
}