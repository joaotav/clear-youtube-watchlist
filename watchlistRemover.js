var languageList = [{
    "language": "english",
    "primaryButton": '#primary button[aria-label="Action menu"]',
    "removeButton": '//span[contains(text(),"Remove from")]',
}, {
    "language": "german",
    "primaryButton": '#primary button[aria-label="Aktionsmenü"]',
    "removeButton": '//span[contains(text(),"Aus")]',
}, {
    "language": "french",
    "primaryButton": '#primary button[aria-label="Menu d\'actions"]',
    "removeButton": '//span[contains(text(),"Supprimer de")]',
}, {
    "language": "czech",
    "primaryButton": '#primary button[aria-label="Nabídka akcí"]',
    "removeButton": '//span[contains(text(),"Odstranit ze seznamu")]',
}, {
    "language": "polish",
    "primaryButton": '#primary button[aria-label="Menu czynności"]',
    "removeButton": '//span[contains(text(),"Usuń z ")]',
}, {
    "language": "pt-br",
    "primaryButton": '#primary button[aria-label="Menu de ações"',
    "removeButton": '//span[contains(text(),"Remover")]',
}, {
    "language": "arabic",
    "primaryButton": '#primary button[aria-label="قائمة الإجراءات"',
    "removeButton": '//span[contains(text(),"إزالة من")]',
}, {
    "language": "dutch",
    "primaryButton": '#primary button[aria-label="Actiemenu"',
    "removeButton": '//span[contains(text(),"Verwijderen uit")]',
}, {
    "language": "turkish",
    "primaryButton": '#primary button[aria-label="İşlem menüsü"]',
    "removeButton": '//span[contains(text(),"Daha sonra")]',
}, {
    "language": "korean",
    "primaryButton": '#primary button[aria-label="작업 메뉴"]',
    "removeButton": '//span[contains(text(),"에서 삭제")]',
} ];

function clearWatchlist() {
    watchlistVideos = document.getElementsByTagName('ytd-playlist-video-renderer');

    if (watchlistVideos[0]){
        for (i in languageList) {
            languageMatches = watchlistVideos[0].querySelector(languageList[i].primaryButton);
                if (languageMatches) {
                    primaryButton = languageList[i].primaryButton;
                    removeButton = languageList[i].removeButton;
                } 
        }
    };

    var options = document.evaluate(
        removeButton,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );


    videoRemovalTimer = setInterval(function () {
            if (watchlistVideos[0] == null) {
                clearInterval(videoRemovalTimer)
                alert("Watch later list cleared :-)");
            } else {
                watchlistVideos[0].querySelector(primaryButton).click();
                var options = document.evaluate(
                    removeButton,
                    document,
                    null,
                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                    null
                );
                options.snapshotItem(0).click();
            }
        } , 500);

};

if (document.URL !== "https://www.youtube.com/playlist?list=WL") {
    alert('Please navigate to your watch later page before executing the script (https://www.youtube.com/playlist?list=WL)'); 
} else {
    if (confirm("Remove all videos in your watch list?")) {
        clearWatchlist();
    };
};
  

