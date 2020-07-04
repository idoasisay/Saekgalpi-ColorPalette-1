import React from 'react';
import styled from 'styled-components';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import './MakePalette.scss';

const MakePaletteContainer = styled.section`
    border: 1px solid black;
    background-color: coral;
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;

const MakePaletteHexContainer = styled.section`
    border: 1px solid black;
    background-color: cornflowerblue;
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;

const MakePalette = () => {
    const onChangeColor = (e) => {
        // 컬러 갯수에 따라서 바뀜
        // TODO: Input 값 value로 받아 state 설정
        console.log(e.target.value);
    };
    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };
    const onClickPostButton = (e) => {
        // TODO: 서버로 팔레트 POST 요청 (axios 사용)
    };
    return (
        <main className='make-palette__main'>
            {/* wrapper */}
            <h1 className='make-palette__title'> 팔레트 편집 </h1>
            <MakePaletteContainer className='make-palette__color-container'>
                {/* top color choice
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteList />
            </MakePaletteContainer>
            <MakePaletteHexContainer className='make-palette__hex-container'>
                {/* middle hex code desc 
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteHexList />
            </MakePaletteHexContainer>
            <section className='make-palette__palette-info'>
                {/* bottom other desc */}
                <form className='palette-info__form'>
                    <label className='palette-info__color-range-label'>
                        색상 갯수
                        <input
                            className='palette-info__color-range'
                            type='range'
                            min='2'
                            max='7'
                            name='colorRange'
                            onChange={onChangeColor}
                        />
                    </label>
                    <input
                        className='palette-info__palette-name'
                        type='text'
                        placeholder='팔레트 이름'
                        name='title'
                        onChange={handleInputValue}
                    />
                    <textarea
                        className='palette-info__palette-description'
                        placeholder='팔레트 설명'
                        name='description'
                        onChange={handleInputValue}
                    />
                    <button
                        className='make-palette__button'
                        onClick={onClickPostButton}
                    >
                        저장
                    </button>
                </form>
            </section>
        </main>
    );
};

export default MakePalette;
