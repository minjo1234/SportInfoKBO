import React, { useState, useEffect } from 'react';

export default function CurrentBatIcon() {
    const [popupOpen, setPopupOpen] = useState(false); // 팝업 창 열림 여부
    const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션


    // 이미지 클릭 이벤트 핸들러
    const handleImageClick = () => {
        if (!selectedOption) {
            setPopupOpen(true);
        }
    };

    // 팝업 내 옵션 선택 핸들러
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setPopupOpen(false);

            // 세션에 선택한 옵션을 저장
    };

    return (
        <div>
            {/* 이미지 클릭 이벤트 */}
            <img
                src="https://logo.ofof.live/data/team/14282.png?v=0"
                alt="이미지 설명"
                onClick={handleImageClick}
            />

            {/* 팝업 창 */}
            {popupOpen && (
                <div className="popup">
                    <p>이미지에 마우스를 가져다 대면 승리 또는 패배를 선택하세요.</p>
                    <button onClick={() => handleOptionClick('승리')}>승리</button>
                    <button onClick={() => handleOptionClick('패배')}>패배</button>
                </div>
            )}

            {/* 선택된 옵션 표시 */}
            {selectedOption && (
                <p>선택한 옵션: {selectedOption}</p>
            )}
        </div>
    );
}
