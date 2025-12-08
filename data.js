// 무기/의상/기적/콤보 데이터 관리

const data = {
    weapons: [
        { id: 1, name: '검과 방패',          img: 'images/weapon-1.png' },
        { id: 2, name: '강철 대검',          img: 'images/weapon-2.png' },
        { id: 3, name: '단검',              img: 'images/weapon-3.png' },
        { id: 4, name: '대형 석궁',              img: 'images/weapon-4.png' },
        { id: 5, name: '도',                img: 'images/weapon-5.png' },
        { id: 6, name: '자유',                img: 'images/free.png' }
    ],
    outfits: [
        { 
            id: 1, name: '분홍 토끼', img: 'images/outfit-1.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">경험치 드롭 +3%</span>'
        },
        { 
            id: 2, name: '갑옷을 입은 토끼', img: 'images/outfit-2.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">방어력 +10</span><br><span style="color:#ff5252">최대 HP -15</span>'
        },
        { 
            id: 3, name: '갈색 토끼', img: 'images/outfit-3.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">회피 +12</span><br><span style="color:#ff5252">치명타 확률 -4%</span>'
        },
        { 
            id: 4, name: '땋은 머리 토끼', img: 'images/outfit-4.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">공격 속도 +7%</span><br><span style="color:#4caf50">이동 속도 +12%</span><br><span style="color:#ff5252">대시 회복 속도 -20%</span>'
        },
        { 
            id: 5, name: '주황색 토끼', img: 'images/outfit-5.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">최대 HP +10</span><br><span style="color:#ff5252">최대 MP -15</span>'
        },
        { 
            id: 6, name: '빨간망토 토끼', img: 'images/outfit-6.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">MP 회복 시 2배 회복</span><br><span style="color:#ff5252">최대 MP -20</span>'
        },
        { 
            id: 7, name: '흰색 토끼', img: 'images/outfit-7.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<span style="color:#4caf50">일반 공격 피해 +8%</span><br><span style="color:#ff5252">특수 공격 피해 -5%</span>'
        },
        { 
            id: 8, name: '날개 귀 토끼', img: 'images/outfit-8.png', 
            unlock: '<span style="color:#888">기본 코스튬</span>',
            desc: '<img src="images/item-blessing.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템: 축복</span><br><span style="color:#ff5252">무기 피해량 -10%</span>'
        },
        { 
            id: 9, name: '붉은 옷 고양이', img: 'images/outfit-9.png', 
            unlock: '<span style="color:#888">화염속성 피해 50 달성</span>',
            desc: '<img src="images/item-firebolt.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 파이어 볼트</span><br><span style="color:#4caf50">화염속성 피해 +5</span><br><span style="color:#ff5252">얼음속성 피해 -5</span>'
        },
        { 
            id: 10, name: '붉은 여우', img: 'images/outfit-10.png', 
            unlock: '<span style="color:#888">석판 10개 동시에 보유</span>',
            desc: '<span style="color:#4caf50">인벤토리 슬롯 +6</span><br><span style="color:#ff5252">치유량 감소 -50%</span>'
        },
        { 
            id: 11, name: '개구리', img: 'images/outfit-11.png', 
            unlock: '<span style="color:#888">번개속성 피해 50 달성</span>',
            desc: '<img src="images/item-lightning.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 라이트닝 볼트</span><br><span style="color:#4caf50">번개속성 피해 +5</span><br><span style="color:#ff5252">화염속성 피해 -5</span>'
        },
        { 
            id: 12, name: '두더지', img: 'images/outfit-12.png', 
            unlock: '<span style="color:#888">두더지 300마리 누적 처치</span>',
            desc: '<img src="images/item-bell.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 금빛 핸드벨</span><br><span style="color:#4caf50">동료가 입히는 피해량 +10%</span><br><span style="color:#ff5252">방어력 -20</span><br><span style="color:#ff5252">이동속도 -10%</span>'
        },
        { 
            id: 13, name: '수달', img: 'images/outfit-13.png', 
            unlock: '<span style="color:#888">치명타 피해 175% 이상 달성</span>',
            desc: '<span style="color:#4caf50">치명타 확률 +9%</span><br><span style="color:#ff5252">이동 속도 -8%</span>'
        },
        { 
            id: 14, name: '하얀 늑대', img: 'images/outfit-14.png', 
            unlock: '<span style="color:#888">라타카 5회 처치</span>',
            desc: '<span style="color:#4caf50">무한 대시</span><br><span style="color:#ff5252">대시 무적 비활성화</span>'
        },
        { 
            id: 15, name: '마법사 토끼', img: 'images/outfit-15.png', 
            unlock: '<span style="color:#888">마법으로 적 50마리 처치</span>',
            desc: '<img src="images/item-icebolt.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 아이스 볼트</span><br><span style="color:#4caf50">얼음속성 피해 +5</span><br><span style="color:#ff5252">번개속성 피해 -5</span>'
        },
        { 
            id: 16, name: '유령', img: 'images/outfit-16.png', 
            unlock: '<span style="color:#888">한 모험에서 마법서를 5개 이상 획득</span>',
            desc: '<img src="images/item-firearrow.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 파이어 애로우</span><br><span style="color:#4caf50">마법서가 MP를 소모하지 않음</span><br><span style="color:#ff5252">무기 피해량 -40%</span>'
        },
        { 
            id: 17, name: '학자 도마뱀', img: 'images/outfit-17.png', 
            unlock: '<span style="color:#888">하드 모드 20단계 이상 클리어</span>',
            desc: '<img src="images/item-letter.png" style="display:block; margin:0 auto 5px auto; width:40px; height:40px;"><span style="color:#4caf50">시작 아이템 : 세렌의 휘갈긴 편지</span><br><span style="color:#4caf50">무한 MP</span><br><span style="color:#ff5252">최대 HP가 20으로 고정됨</span>'
        },
        { 
            id: 18, name: '날개 잃은 박쥐', img: 'images/outfit-18.png', 
            unlock: '<span style="color:#888">헌혈 이벤트 5회 완료</span>',
            desc: '<span style="color:#4caf50">HP 흡수 +5</span><br><span style="color:#ff5252">대시 횟수가 1회로 고정됨</span>'
        },
        { 
            id: 19, name: '스켈레톤', img: 'images/outfit-19.png', 
            unlock: '<span style="color:#888">단일 판에서 잃은 체력 누적 333 달성</span>',
            desc: '<span style="color:#4caf50">사망 시 60% 체력으로 부활 (2회)</span><br><span style="color:#ff5252">최대 HP가 50으로 고정됨</span>'
        },
        { 
            id: 20, name: '모험가 토끼', img: 'images/outfit-20.png', 
            unlock: '<span style="color:#888">던그리드 구매</span>',
            desc: '<span style="color:#4caf50">대시 횟수 +1</span><br><span style="color:#4caf50">대시 회복 속도 +10%</span><br><span style="color:#ff5252">마법 가속 -50%</span>'
        },
        { 
            id: 21, name: '자유', img: 'images/free.png',
        }
    ],
    miracles: [
        { 
            id: 1, name: '결투가', img: 'images/miracle-1.png', 
            desc: '<span style="color:#4caf50">+24%</span> 공격 속도' 
        },
        { 
            id: 2, name: '경비병', img: 'images/miracle-2.png', 
            desc: '<span style="color:#4caf50">+35%</span> 최종 HP' 
        },
        { 
            id: 3, name: '광전사', img: 'images/miracle-3.png', 
            desc: '<span style="color:#4caf50">+20%</span> 모든 피해 증폭<br><span style="color:#ff5252">-15</span> 방어력' 
        },
        { 
            id: 4, name: '기상학자', img: 'images/miracle-4.png', 
            desc: '<span style="color:#4caf50">+25%</span> 먹구름의 추가 피해량<br><span style="color:#4caf50">+10</span> 먹구름 용량<br><span style="color:#4caf50">+4</span> 번개속성 피해' 
        },
        { 
            id: 5, name: '도박사', img: 'images/miracle-5.png', 
            desc: '<span style="color:#4caf50">+7</span> 행운<br><span style="color:#4caf50">주사위 10개 획득</span><br><span style="color:#ff5252">획득 아이템 없음</span>' 
        },
        { 
            id: 6, name: '로그', img: 'images/miracle-6.png', 
            desc: '<span style="color:#4caf50">+10%</span> 치명타 확률<br><span style="color:#4caf50">+10</span> 회피' 
        },
        { 
            id: 7, name: '사냥꾼', img: 'images/miracle-7.png', 
            desc: '<span style="color:#4caf50">+50%</span> 치명타 피해' 
        },
        { 
            id: 8, name: '설원 경비병', img: 'images/miracle-8.png', 
            desc: '<span style="color:#4caf50">+9</span> 얼음 속성 피해<br><span style="color:#4caf50">+10%</span> 이동 속도' 
        },
        { 
            id: 9, name: '시종', img: 'images/miracle-9.png', 
            desc: '<span style="color:#4caf50">+15</span> 방어력'
        },
        { 
            id: 10, name: '어쌔신', img: 'images/miracle-10.png', 
            desc: '<span style="color:#4caf50">+6</span> 물리 피해<br><span style="color:#4caf50">+5%</span> 치명타 확률' 
        },
        { 
            id: 11, name: '얼음 대장장이', img: 'images/miracle-11.png', 
            desc: '<span style="color:#4caf50">+15%</span> 얼음무구 아티팩트 충전 속도<br><span style="color:#4caf50">+10%</span> 얼음무구의 피해량' 
        },
        { 
            id: 12, name: '요리사', img: 'images/miracle-12.png', 
            desc: '<span style="color:#4caf50">+5</span> 화염 속성 피해<br><span style="color:#4caf50">+25%</span> 화상 디버프 추가 피해량' 
        },
        { 
            id: 13, name: '원소술사', img: 'images/miracle-13.png', 
            desc: '<span style="color:#4caf50">+7</span> 화염 속성 피해<br><span style="color:#4caf50">+7</span> 얼음 속성 피해<br><span style="color:#4caf50">+7</span> 번개 속성 피해' 
        },
        { 
            id: 14, name: '장군', img: 'images/miracle-14.png', 
            desc: '<span style="color:#4caf50">+35%</span> 동료가 입히는 피해량<br>' 
        },
        { 
            id: 15, name: '정보원', img: 'images/miracle-15.png', 
            desc: '<span style="color:#4caf50">+2</span> 대시 횟수<br><span style="color:#4caf50">+15%</span> 대시 회복 속도' 
        },
        { 
            id: 16, name: '천문학자', img: 'images/miracle-16.png', 
            desc: '<span style="color:#4caf50">+25%</span> 행성 피해량<br><span style="color:#4caf50">+5%</span> 공격 속도' 
        },
        { 
            id: 17, name: '탐험가', img: 'images/miracle-17.png', 
            desc: '<span style="color:#4caf50">+6</span> 인벤토리 슬롯<br><span style="color:#ff5252">획득 아이템 없음</span>' 
        },
        { 
            id: 18, name: '학자', img: 'images/miracle-18.png', 
            desc: '<span style="color:#4caf50">+15</span> MP 재생'
        },
        { 
            id: 19, name: '자유', img: 'images/miracle-19.png'
        }
    ],
    combos: [
        { 
            id: 1, name: '견고', img: 'images/combo-1.png', 
            desc: '(2) +2 물리 피해<br>(4) +4 물리 피해<br>(6) +6 물리 피해<br>(8) +8 물리 피해<br>(10) +10 물리 피해 증폭' 
        },
        { 
            id: 2, name: '그림자', img: 'images/combo-2.png', 
            desc: '(2) +4 회피<br>(4) +5 회피<br>(6) +6 회피<br>(8) 능력치 설명<br>(10) 능력치 설명' 
        },
        { 
            id: 3, name: '빙하', img: 'images/combo-3.png', 
            desc: '(2) 서리 손길 효과 활성화<br>(4) +6 얼음속성 피해<br>(6) 서리 손길 재사용 대기시간 가속 150%<br>(8) +8 얼음속성 피해<br>(10) 빙결에 필요한 동상 중첩 수 -1' 
        },
        { 
            id: 4, name: '호수', img: 'images/combo-4.png', 
            desc: '(3) +20 최대 MP, +5 MP 재생<br>(6) +30 최대 MP, +10% MP를 소모하는 능력의 피해량<br>(9) +40 최대 MP, +25% MP를 소모하는 능력의 피해량' 
        },
        { 
            id: 5, name: '바람노래', img: 'images/combo-5.png', 
            desc: '(2) +8% 공격 속도<br>(4) +12% 공격 속도<br>(6) +16% 공격 속도<br>(8) +20% 공격 속도<br>(10) +15% 무기 피해량, +1 대시 횟수' 
        },
        { 
            id: 6, name: '신비', img: 'images/combo-6.png', 
            desc: '아티팩트 레벨 증가<br>(2) 무작위 1칸<br>(4) 무작위 2칸'
        },
        { 
            id: 7, name: '마법공학', img: 'images/combo-7.png', 
            desc: '(2) 전격 손길 효과 활성화<br>(4) +6 번개속성 피해<br>(6) 전격 손길 재사용 대기시간 가속 150%<br>(8) +8 번개속성 피해<br>(10) 감전이 발동하는 시간 -1초' 
        },
        { 
            id: 8, name: '얼음무구', img: 'images/combo-8.png', 
            desc: '(2) +6% 얼음 무구 충전 속도<br>(4) +8% 얼음 무구 충전 속도<br>(6) +6% 얼음 무구의 피해량<br>(8) +8% 얼음 무구의 피해량<br>(10) 얼음 무구가 1회 추가 발동' 
        },
        { 
            id: 9, name: '행성', img: 'images/combo-9.png', 
            desc: '(2) +8% 행성 피해량<br>(4) +10% 행성 피해량<br>(6) +12% 행성 피해량<br>(8) +14% 행성 피해량<br>(10) +16% 행성 피해량, +12% 행성 공격 속도' 
        },
        { 
            id: 10, name: '정밀', img: 'images/combo-10.png', 
            desc: '(2) +4% 치명타 확률<br>(4) +6% 치명타 확률<br>(6) +8% 치명타 확률<br>(8) +10% 치명타 확률<br>(10) +30% 치명타 피해' 
        },
        { 
            id: 11, name: '동료', img: 'images/combo-11.png', 
            desc: '(2) +6% 동료가 입히는 피해량<br>(4) +8% 동료가 입히는 피해량<br>(6) +10% 동료가 입히는 피해량, +15 동료들의 방어력<br>(8) +12% 동료가 입히는 피해량, +20 동료들의 방어력<br>(10) +20% 동료가 입히는 피해량, +100% 동료 부활 시간 가속' 
        },
        { 
            id: 12, name: '잉걸불', img: 'images/combo-12.png', 
            desc: '(2) 화염 손길 효과 활성화<br>(4) +6 화염속성 피해<br>(6) 화염 손길 재사용 대기시간 가속 150%<br>(8) +8 화염속성 피해<br>(10) 화상의 기본 피해 배율이 18→28%로 변경' 
        },
        { 
            id: 13, name: '먹구름', img: 'images/combo-13.png', 
            desc: '(2) 먹구름 활성화 (기본 용량 15)<br>(4) +8 먹구름 용량<br>(6) +12 먹구름 용량<br>(8) +16 먹구름 용량<br>(10) +20 먹구름 용량, 먹구름이 2점사로 공격함' 
        },
        { 
            id: 14, name: '수호', img: 'images/combo-14.png', 
            desc: '(2) +6 방어력<br>(4) +7 방어력<br>(6) +8 방어력<br>(8) +10 방어력<br>(10) +10 방어력, +5% 방어 관통' 
        },
        { 
            id: 15, name: '아카데미', img: 'images/combo-15.png', 
            desc: '(2) +8 마법서 가속<br>(4) +12 마법서 가속<br>(6) +16 마법서 가속<br>(8) +20 마법서 가속<br>(10) +15 마법서 피해량, +8 MP 재생' 
        },
        { 
            id: 16, name: '태양검', img: 'images/combo-16.png', 
            desc: '(2) 효과 활성화(기본 검 x5)<br>(4) +6% 태양검 피해량<br>(6) +8% 태양검 피해량, +1 태양검 개수 상한<br>(8) +10% 태양검 피해량, +2 태양검 개수 상한<br>(10) +12% 태양검 피해량, +6 태양검 개수 상한' 
        },
        { 
            id: 17, name: '자유', img: 'images/free.png'
        }
    ]
};