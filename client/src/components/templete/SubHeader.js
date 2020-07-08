import React from 'react';
import { Link } from 'react-router-dom';
import { RoundWaveButton, UnderlineButton } from './Templete_styd';
import logos from '../../images/2.png';

const SubHeader = ({ isLogin, isAdmin }) => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='SubHeader__wrapper'>
            <div className='SubHeader__Logo'>
                {/*수채화 백그라운드 넣어 봅시다*/}
                <Link to='/'>
                    <img alt={11} src={logos} />
                </Link>
            </div>
            <nav>
                {!isLogin ? (
                    <ul>
                        <li>
                            <Link to='/allPalette'>
                                <UnderlineButton>
                                    모든 색갈피 보기
                                </UnderlineButton>
                            </Link>
                        </li>
                        <li>
                            <span className='SubHeader__divider'>l</span>
                        </li>
                        <li>
                            <Link to='/signIn'>
                                <UnderlineButton>로그인</UnderlineButton>
                            </Link>
                        </li>
                        <li>
                            <Link to='/signUp'>
                                <RoundWaveButton type='primary' shape='round'>
                                    회원가입
                                </RoundWaveButton>
                            </Link>
                        </li>{' '}
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link
                                to={{
                                    pathname: `${
                                        isAdmin ? '/Admin' : '/MyPage'
                                    }`,
                                }}
                            >
                                <UnderlineButton>내 색갈피</UnderlineButton>
                            </Link>
                        </li>
                        <li>
                            <RoundWaveButton type='primary' shape='round'>
                                로그아웃
                            </RoundWaveButton>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default SubHeader;
