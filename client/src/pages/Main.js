import React from 'react';
import { Link } from 'react-router-dom';
import RandomColorList from '../components/RandomColorList';
import PaletteList from '../components/PaletteList';

const Main = () => {
    // TODO: 메인 페이지 들어오자마자 팔레트 정보 불러오기 GET 요청 (useEffect, axios)

    return (
        <main>
            <h1>메인</h1>
            <button>
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            </button>
            <section>
                <PaletteList />
            </section>
            <section>
                <PaletteList />
            </section>
            <RandomColorList />
        </main>
    );
};

export default Main;
