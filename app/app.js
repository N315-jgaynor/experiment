var GAMES = [
  {
    gameTitle: "Mario Kart DS",
    gameImg: "thumb1_300x300.jpg",
    gameDesc:
      "Mario Kart is a racing game in which players race against seven competitors in obstacle tracks, using item-based weaponry to gain further advantages over their opponents.",
    gameRanking: "#1",
  },

  {
    gameTitle: "Wii Sports",
    gameImg: "thumb2_300x300.jpg",
    gameDesc:
      "Wii Sports is a game in which players can choose betweeen several mini games and battle against their friends or the computer. Games include popular sports like baseball and tennis.",
    gameRanking: "#2",
  },

  {
    gameTitle: "Lego Ninjago",
    gameImg: "thumb3_300x300.jpg",
    gameDesc:
      "Lego Ninjago is a game in which players navigate a digial world fighting enemies using supernatural powers. Each character is assigned a power according to the elements, including but not limited to earth and fire.",
    gameRanking: "#3",
  },

  {
    gameTitle: "Pokemon Soul Silver",
    gameImg: "thumb4_300x300.jpg",
    gameDesc:
      "Pokemon Soul Silver is a remake of the hit game Pokemon Silver. Users navigate both the Johto and Kanto regions while collecting Pokemon and battling rivals.",
    gameRanking: "#4",
  },

  {
    gameTitle: "Super Smash Bros",
    gameImg: "thumb5_300x300.jpg",
    gameDesc:
      "This game involves selecting different characters with unique powers and battling for grand prizes.",
    gameRanking: "#5",
  },

  {
    gameTitle: "Animal Crossing",
    gameImg: "thumb6_300x300.jpg",
    gameDesc:
      "Animal Crossing is a game which players navigate a digital world while completing side quests and building their house.",
    gameRanking: "#6",
  },

  {
    gameTitle: "Pokemon Diamond",
    gameImg: "thumb7_300x300.jpg",
    gameDesc:
      "Pokemon Diamond features the Sinnoh region, in which players fight gym leaders and collect Pokemon along the way. Popular legendaries found in this game include Heatran and Dialga.",
    gameRanking: "#7",
  },

  {
    gameTitle: "Lego Star Wars",
    gameImg: "thumb8_300x300.jpg",
    gameDesc:
      "Lego Star Wars is a lego variation of the popular Star Wars series. Players fight evil villians and build their arsenal along the way.",
    gameRanking: "#8",
  },

  {
    gameTitle: "Luigi's Mansion",
    gameImg: "thumb9_300x300.jpg",
    gameDesc:
      "Luigi's Mansion is a game in which Luigi navigates a mansion with fun surprises along the way.",
    gameRanking: "#9",
  },

  {
    gameTitle: "Pokemon Black 2",
    gameImg: "thumb10_300x300.jpg",
    gameDesc:
      "Pokemon Black 2 is a remake of the popular game Pokemon Black. This game features the Unova region, which was the first main addition to the Pokeverse since its introduction.",
    gameRanking: "#10",
  },
];

function loadData() {
  $.each(GAMES, function (index, game) {
    $("#app").append(`<div id="${index}" class="gameHolder">
      <h1>${game.gameTitle}</h1>
      <div class="game-image">
        <img src="images/thumb-assets/${game.gameImg}" />
      </div>
      <div class="game-desc">
      ${game.gameDesc}
      </div>
      <div class="game-ranking">Ranking: ${game.gameRanking}
      </div>
    </div>`);
  });
}

function navListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $(".links a").click(function (e) {
    $(".bars").removeClass("active");
    $(".links").removeClass("active");
  });
}

$(document).ready(function () {
  navListeners();
  loadData();
});
