// 기능 관리

let playerCount = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomUniqueItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomItemExcluding(pool, excludeNames) {
    const filtered = pool.filter(item => !excludeNames.includes(item.name));
    if (filtered.length === 0) return pool[getRandomInt(pool.length)];
    return filtered[getRandomInt(filtered.length)];
}

function getFilteredData(type) {
    let pool = [];
    let isFreeIncluded = true;

    if (type === 'weapon') {
        pool = [...data.weapons];
        isFreeIncluded = document.getElementById('chk-weapon-free').checked;
    } else if (type === 'outfit') {
        pool = [...data.outfits];
        isFreeIncluded = document.getElementById('chk-outfit-free').checked;
    } else if (type === 'miracle') {
        pool = [...data.miracles];
        isFreeIncluded = document.getElementById('chk-miracle-free').checked;
    } else if (type === 'combo') {
        pool = [...data.combos];
        isFreeIncluded = document.getElementById('chk-combo-free').checked;
    }

    if (!isFreeIncluded) {
        pool = pool.filter(item => item.name !== '자유');
    }
    return pool;
}

function addPlayer() {
    const currentPlayers = document.querySelectorAll('.player-card').length;
    if (currentPlayers >= 4) {
        alert("플레이어는 최대 4명까지만 추가할 수 있습니다.");
        return;
    }

    playerCount++;
    const playersArea = document.getElementById('playersArea');
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';
    playerCard.id = `player-${playerCount}`;
    
    const countInput = document.getElementById('global-combo-count');
    let comboCount = parseInt(countInput.value);
    if (comboCount < 1) comboCount = 1;
    if (comboCount > 5) comboCount = 5;

    let comboSlotsHtml = '';
    for(let i=0; i<comboCount; i++) {
        comboSlotsHtml += `
            <div class="combo-slot" id="combo-slot-${playerCount}-${i}">
                <div class="item-image"></div>
                <div class="item-name" style="color:#777;">-</div>
                <button class="btn-mini-roll" onclick="rollSingleCombo(${playerCount}, ${i})">R</button>
            </div>
        `;
    }

    playerCard.innerHTML = `
        <div class="player-header">
            <input type="text" class="player-name-input" value="플레이어 ${playerCount}">
            <button class="btn-delete" onclick="removePlayer(${playerCount})">삭제</button>
        </div>
        
        <div class="item-row section-weapon">
            <div class="item-label">무기</div>
            <div class="item-display" id="weapon-display-${playerCount}">
                <div class="item-image"></div>
                <div class="item-name" style="color:#777;">-</div>
            </div>
            <button class="btn-roll-small" onclick="rollIndividual(${playerCount}, 'weapon')">Roll</button>
        </div>

        <div class="item-row section-outfit">
            <div class="item-label">의상</div>
            <div class="item-display" id="outfit-display-${playerCount}">
                <div class="item-image"></div>
                <div class="item-name" style="color:#777;">-</div>
            </div>
            <button class="btn-roll-small" onclick="rollIndividual(${playerCount}, 'outfit')">Roll</button>
        </div>

        <div class="item-row section-miracle">
            <div class="item-label">기적</div>
            <div class="item-display" id="miracle-display-${playerCount}">
                <div class="item-image"></div>
                <div class="item-name" style="color:#777;">-</div>
            </div>
            <button class="btn-roll-small" onclick="rollIndividual(${playerCount}, 'miracle')">Roll</button>
        </div>

        <div class="item-row section-combo">
            <div class="item-label">콤보</div>
            <div class="item-display" id="combo-display-${playerCount}" style="flex-direction: column; align-items: flex-start; gap: 5px; padding-top: 8px; padding-bottom: 8px;">
                ${comboSlotsHtml}
            </div>
            <button class="btn-roll-small" onclick="rollIndividual(${playerCount}, 'combo')">Roll</button>
        </div>
    `;
    playersArea.appendChild(playerCard);
    
    updateFieldVisibility();
}

function removePlayer(id) {
    const playerCard = document.getElementById(`player-${id}`);
    if (playerCard) {
        playerCard.remove();
    }
}

function updateFieldVisibility() {
    const showWeapon = document.getElementById('show-weapon').checked;
    const showOutfit = document.getElementById('show-outfit').checked;
    const showMiracle = document.getElementById('show-miracle').checked;
    const showCombo = document.getElementById('show-combo').checked;

    document.querySelectorAll('.section-weapon').forEach(el => el.style.display = showWeapon ? 'flex' : 'none');
    document.querySelectorAll('.section-outfit').forEach(el => el.style.display = showOutfit ? 'flex' : 'none');
    document.querySelectorAll('.section-miracle').forEach(el => el.style.display = showMiracle ? 'flex' : 'none');
    document.querySelectorAll('.section-combo').forEach(el => el.style.display = showCombo ? 'flex' : 'none');
}

function updateDisplay(elementId, items) {
    const displayEl = document.getElementById(elementId);
    displayEl.innerHTML = '';

    const itemsToShow = Array.isArray(items) ? items : [items];

    itemsToShow.forEach(item => {
         const itemDiv = document.createElement('div');
         itemDiv.style.display = 'flex';
         itemDiv.style.alignItems = 'center';
         itemDiv.style.width = '100%';
         
         let tooltipContent = '';
         
         if (item.unlock) {
             tooltipContent += `<div style="margin-bottom: 8px;">${item.unlock}</div>`;
         }
         if (item.desc) {
             tooltipContent += `<div>${item.desc}</div>`;
         }

         let tooltipHtml = '';
         if (tooltipContent) {
             tooltipHtml = `<div class="item-tooltip">${tooltipContent}</div>`;
         }

         let imgStyle = '';
         if (item.img) {
             imgStyle = `background-image: url('${item.img}'); color: transparent;`;
         }

         itemDiv.innerHTML = `
            <div class="item-image" style="${imgStyle}">${item.img ? '' : '이미지'}</div>
            <div class="item-name">${item.name}</div>
            ${tooltipHtml}
         `;
         displayEl.appendChild(itemDiv);
    });
}

function rollSingleCombo(playerId, slotIndex) {
    const pool = getFilteredData('combo');
    if (pool.length === 0) return;

    const displayEl = document.getElementById(`combo-display-${playerId}`);
    const currentNames = Array.from(displayEl.querySelectorAll('.item-name'))
                              .map(el => el.innerText)
                              .filter(name => name !== '-' && name !== '자유'); 

    const newItem = getRandomItemExcluding(pool, currentNames);
    
    const slotEl = document.getElementById(`combo-slot-${playerId}-${slotIndex}`);
    if(slotEl) {
        let imgStyle = newItem.img ? `background-image: url('${newItem.img}'); color: transparent;` : '';
        
        let tooltipHtml = '';
        if (newItem.desc) {
            tooltipHtml = `<div class="item-tooltip">${newItem.desc}</div>`;
        }
        
        slotEl.innerHTML = `
            <div class="item-image" style="${imgStyle}">${newItem.img ? '' : '이미지'}</div>
            <div class="item-name">${newItem.name}</div>
            ${tooltipHtml}
            <button class="btn-mini-roll" onclick="rollSingleCombo(${playerId}, ${slotIndex})">R</button>
        `;
    }
}

function rollIndividual(playerId, type) {
    const pool = getFilteredData(type);
    if (pool.length === 0) return;

    if (type === 'weapon' || type === 'outfit' || type === 'miracle') {
        const item = pool[getRandomInt(pool.length)];
        updateDisplay(`${type}-display-${playerId}`, item);
    } 
    else if (type === 'combo') {
        const countInput = document.getElementById('global-combo-count');
        let count = parseInt(countInput.value);
        if (count < 1) count = 1;
        if (count > 5) count = 5;
        countInput.value = count;
        
        if (count > pool.length) count = pool.length;

        const items = getRandomUniqueItems(pool, count);
        
        const displayEl = document.getElementById(`combo-display-${playerId}`);
        displayEl.innerHTML = ''; 

        items.forEach((item, index) => {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'combo-slot';
            slotDiv.id = `combo-slot-${playerId}-${index}`;
            
            let imgStyle = item.img ? `background-image: url('${item.img}'); color: transparent;` : '';
            
            let tooltipHtml = '';
            if (item.desc) {
                tooltipHtml = `<div class="item-tooltip">${item.desc}</div>`;
            }

            slotDiv.innerHTML = `
                <div class="item-image" style="${imgStyle}">${item.img ? '' : '이미지'}</div>
                <div class="item-name">${item.name}</div>
                ${tooltipHtml}
                <button class="btn-mini-roll" onclick="rollSingleCombo(${playerId}, ${index})">R</button>
            `;
            displayEl.appendChild(slotDiv);
        });
    }
}

function rollHardMode() {
    const value = Math.floor(Math.random() * 39);
    document.getElementById('hardmodeValue').innerText = value;
}

function rollAll() {
    const players = document.querySelectorAll('.player-card');
    players.forEach(player => {
        const idStr = player.id.split('-')[1];
        const id = parseInt(idStr);
        
        if(document.getElementById('show-weapon').checked) rollIndividual(id, 'weapon');
        if(document.getElementById('show-outfit').checked) rollIndividual(id, 'outfit');
        if(document.getElementById('show-miracle').checked) rollIndividual(id, 'miracle');
        if(document.getElementById('show-combo').checked) rollIndividual(id, 'combo');
    });
    rollHardMode();
}

function clearAll() {
    const playersArea = document.getElementById('playersArea');
    playersArea.innerHTML = '';
    
    playerCount = 0;
    document.getElementById('hardmodeValue').innerText = '0';

    addPlayer();
    addPlayer();
}

window.onclick = function(event) {
    if (!event.target.closest('details.custom-dropdown')) {
        const openDetails = document.querySelectorAll('details.custom-dropdown[open]');
        openDetails.forEach(detail => detail.removeAttribute('open'));
    }
}

window.onload = function() {
    addPlayer();
    addPlayer();
};