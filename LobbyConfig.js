import * as a from "./cc.js";
import * as n from "./Enum.js";

function main() {
    a._RF.push({}, "e348a44EFlInapRVyTdceGl", "LobbyConfig", void 0);
    e("LobbyConfig", class {
        constructor(...e) {
            this.showNews = !0, this.showPokerFlips = !1, this.showPokerMaster = !1, this.showCasinoLobby = !1, this.showCasinoCoin = !1, this.showPromoCasino = !1, this.showPromotionLobby = !1, this.showInviteFriendMobile = !1, this.showInviteFriendDesktop = !1, this.showDepositBox = !0, this.showSwitchServer = !0, this.showJackfruit = !0, this.showSplash = !0, this.showPlo = !0, this.showPlo5 = !0, this.showGlobalSpin = !0, this.showShortDeckLobby = !0, this.showFlashLobby = !0, this.showNLHELobby = !0, this.switchServerLimit = 1, this.tolerateLostPing = 3, this.showStarSeats = !0, this.showWPTGLiveEvent = !1, this.hideLowTablesForPro = !0, this.showTableCountPlo = !1, this.enablePaceLongBtnStyle = !1, this.enableSDPaceInFlash = !0, this.enablePLOPaceInFlash = !1, this.showSportsBook = !1, this.cashier = {
                premierCashierEnabled: !1,
                paymentSupportPopupEnabled: !1,
                piqOnCashierWebEnabled: !1,
                cashierLobbyViewEnabled: !1,
                tabsToBeEnabled: n.All
            }, this.enableMuckLosingHands = !0, this.casino = {
                showPrimary: !0,
                showSecondary: !0,
                enableRedirectWebMinigame: !0,
                autoSwitchToMiniGameView: !0,
                casinoLocalhostGamePort: "1234",
                isEnableEmbedLogic: !0,
                casinoCoinTooltip: !1,
                showMXNInfo: !1
            }, this.httpApiQueueInterval = 350, this.lobbyConfigs = {
                mtt: {
                    index: 0,
                    name: "mtt",
                    provider: 0,
                    filter: {
                        0: {
                            gameListId: 4,
                            platform: 4
                        }
                    },
                    subfilter: {
                        0: {
                            name: "All",
                            icon: "",
                            filter: {
                                0: {
                                    field: "all"
                                }
                            }
                        },
                        1: {
                            name: "WPT_Live",
                            icon: "Cyprus_Feeder",
                            filter: {
                                0: {
                                    field: "WPTLive",
                                    value: !0
                                }
                            }
                        },
                        2: {
                            name: "Crazy_Freeroll",
                            icon: "Crazy_Freeroll",
                            filter: {
                                0: {
                                    field: "CrazyFreeroll",
                                    value: !0
                                }
                            }
                        },
                        11: {
                            name: "WPT_Daily_Asia",
                            icon: "WPT_Daily_Asia",
                            filter: {
                                0: {
                                    field: "WPTDailyAsia",
                                    value: !0
                                }
                            }
                        },
                        12: {
                            name: "Daily_Prime",
                            icon: "WPT_Daily_Crown",
                            filter: {
                                0: {
                                    field: "DailyPrime",
                                    value: !0
                                }
                            }
                        },
                        13: {
                            name: "Bounty_Rumble",
                            icon: "Bounty_Rumble",
                            filter: {
                                0: {
                                    field: "BountyRumble",
                                    value: !0
                                }
                            }
                        },
                        14: {
                            name: "Hyper_Dash",
                            icon: "Hyper_Dash",
                            filter: {
                                0: {
                                    field: "HyperDash",
                                    value: !0
                                }
                            }
                        },
                        15: {
                            name: "One_Shot",
                            icon: "One_Shot",
                            filter: {
                                0: {
                                    field: "OneShot",
                                    value: !0
                                }
                            }
                        },
                        16: {
                            name: "Weekly_Golden_Bounty",
                            icon: "Golden_Bounty",
                            filter: {
                                0: {
                                    field: "WeeklyGoldenBounty",
                                    value: !0
                                }
                            }
                        },
                        17: {
                            name: "WPT_mystery_Million",
                            icon: "WPT_Mystery_Millions",
                            filter: {
                                0: {
                                    field: "WPTMysteryMillion",
                                    value: !0
                                }
                            }
                        },
                        18: {
                            name: "MyMTTs",
                            filter: {
                                0: {
                                    field: "isMyMTT",
                                    value: !0
                                }
                            },
                            showAmount: !0
                        },
                        19: {
                            name: "Available_Tickets",
                            filter: {
                                0: {
                                    field: "canUseMyTicket",
                                    value: !0
                                }
                            }
                        }
                    }
                },
                nlhe: {
                    index: 1,
                    name: "nlhe",
                    provider: 1,
                    showMyGameFilter: {
                        mobile: !1,
                        landscape: !0
                    },
                    isDisableGroup: !1,
                    filter: {
                        0: {
                            gameId: 2,
                            gameMode: 1
                        }
                    },
                    groups: {
                        14: {
                            index: 0,
                            usdStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 4e4,
                                maxBuyIn: 2e5
                            },
                            cnyStake: {
                                stake: [1e3, 2e3, 4e3],
                                minBuyIn: 285e3,
                                maxBuyIn: 1421e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [100, 200, 400],
                                    ante: 100,
                                    currencyType: 101
                                }
                            }
                        },
                        13: {
                            index: 1,
                            usdStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 2e4,
                                maxBuyIn: 1e5
                            },
                            cnyStake: {
                                stake: [200, 400, 800],
                                minBuyIn: 143e3,
                                maxBuyIn: 711e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 50,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [500, 1e3, 2e3],
                                    ante: 500,
                                    currencyType: 0
                                }
                            }
                        },
                        12: {
                            index: 2,
                            usdStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 11300,
                                maxBuyIn: 56400
                            },
                            cnyStake: {
                                stake: [200, 400, 800],
                                minBuyIn: 8e4,
                                maxBuyIn: 4e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [200, 400, 800],
                                    ante: 200,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [25, 50, 100],
                                    ante: 25,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [200, 400],
                                    ante: 1e3,
                                    currencyType: 0
                                }
                            }
                        },
                        11: {
                            index: 3,
                            usdStake: {
                                stake: [10, 25, 50],
                                minBuyIn: 5700,
                                maxBuyIn: 28200
                            },
                            cnyStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 4e4,
                                maxBuyIn: 2e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [100, 200, 400],
                                    ante: 100,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [100, 200],
                                    ante: 500,
                                    currencyType: 0
                                }
                            }
                        },
                        10: {
                            index: 4,
                            usdStake: {
                                stake: [5, 10, 25],
                                minBuyIn: 2900,
                                maxBuyIn: 14100
                            },
                            cnyStake: {
                                stake: [50, 100],
                                ante: 250,
                                minBuyIn: 2e4,
                                maxBuyIn: 1e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100],
                                    ante: 250,
                                    currencyType: 0
                                }
                            }
                        },
                        9: {
                            index: 5,
                            usdStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1500,
                                maxBuyIn: 14100
                            },
                            cnyStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 1e4,
                                maxBuyIn: 1e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 50,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [5, 10, 20],
                                    ante: 5,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [25, 50],
                                    ante: 125,
                                    currencyType: 0
                                }
                            }
                        },
                        8: {
                            index: 6,
                            usdStake: {
                                stake: [3, 5, 10],
                                minBuyIn: 710,
                                maxBuyIn: 7100
                            },
                            cnyStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 5e3,
                                maxBuyIn: 5e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50, 100],
                                    ante: 25,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [10, 20],
                                    ante: 50,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [1, 2],
                                    ante: 5,
                                    currencyType: 101
                                }
                            }
                        },
                        7: {
                            index: 7,
                            usdStake: {
                                stake: [2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 1200
                            },
                            cnyStake: {
                                stake: [20, 40],
                                minBuyIn: 1500,
                                maxBuyIn: 8600
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4],
                                    currencyType: 101
                                }
                            }
                        },
                        6: {
                            index: 8,
                            usdStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 290,
                                maxBuyIn: 2900
                            },
                            cnyStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 2e3,
                                maxBuyIn: 2e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [10, 20, 40],
                                    ante: 5,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [10, 20, 40],
                                    ante: 10,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [5, 10],
                                    ante: 25,
                                    currencyType: 0
                                },
                                3: {
                                    stake: [.5, 1],
                                    ante: 2.5,
                                    currencyType: 101
                                },
                                4: {
                                    stake: [1, 2],
                                    ante: .5,
                                    currencyType: 101
                                }
                            }
                        },
                        5: {
                            index: 9,
                            usdStake: {
                                stake: [1, 2],
                                minBuyIn: 100,
                                maxBuyIn: 600
                            },
                            cnyStake: {
                                stake: [10, 20],
                                minBuyIn: 720,
                                maxBuyIn: 4300
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2],
                                    currencyType: 101
                                }
                            }
                        },
                        4: {
                            index: 10,
                            usdStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 150,
                                maxBuyIn: 1500
                            },
                            cnyStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [5, 10, 20],
                                    ante: 2,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [5, 10, 20],
                                    ante: 5,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [.5, 1, 2],
                                    ante: .5,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [.5, 1],
                                    ante: .25,
                                    currencyType: 101
                                },
                                4: {
                                    stake: [2, 4],
                                    ante: 10,
                                    currencyType: 0
                                }
                            }
                        },
                        3: {
                            index: 11,
                            usdStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 60,
                                maxBuyIn: 570
                            },
                            cnyStake: {
                                stake: [2, 4, 8],
                                minBuyIn: 400,
                                maxBuyIn: 4e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4, 8],
                                    ante: 2,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [.2, .5, 1],
                                    ante: .2,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [.1, .2],
                                    ante: .5,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [1, 2],
                                    ante: 5,
                                    currencyType: 0
                                }
                            }
                        },
                        2: {
                            index: 12,
                            usdStake: {
                                stake: [.1, .2, .4],
                                minBuyIn: 30,
                                maxBuyIn: 290
                            },
                            cnyStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 2e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2, 4],
                                    currencyType: 0
                                },
                                1: {
                                    stake: [1, 2, 4],
                                    ante: 1,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [.1, .2, .4],
                                    ante: .1,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [.05, .1],
                                    ante: .25,
                                    currencyType: 101
                                }
                            }
                        },
                        1: {
                            index: 13,
                            usdStake: {
                                stake: [.05, .1, .2],
                                minBuyIn: 10,
                                maxBuyIn: 100
                            },
                            cnyStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 80,
                                maxBuyIn: 720
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.05, .1, .2],
                                    ante: .05,
                                    currencyType: 101
                                }
                            }
                        },
                        0: {
                            index: 14,
                            usdStake: {
                                stake: [.02, .05, .1],
                                minBuyIn: 5,
                                maxBuyIn: 50
                            },
                            cnyStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 40,
                                maxBuyIn: 360
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.02, .05, .1],
                                    currencyType: 101
                                },
                                1: {
                                    stake: [.02, .05, .1],
                                    ante: .02,
                                    currencyType: 101
                                }
                            }
                        }
                    }
                },
                flash: {
                    index: 2,
                    name: "flash",
                    provider: 1,
                    isDisableGroup: !0,
                    showMyGameFilter: {
                        mobile: !1,
                        landscape: !0
                    },
                    filter: {
                        0: {
                            gameId: 40,
                            gameMode: 1
                        },
                        1: {
                            gameId: 41,
                            gameMode: -1
                        },
                        2: {
                            gameId: 42,
                            gameMode: -1
                        },
                        3: {
                            gameId: 43,
                            gameMode: -1
                        },
                        4: {
                            gameId: 44,
                            gameMode: -1
                        },
                        5: {
                            gameId: 45,
                            gameMode: -1
                        },
                        6: {
                            gameId: 46,
                            gameMode: -1
                        },
                        7: {
                            gameId: 47,
                            gameMode: -1
                        },
                        8: {
                            gameId: 48,
                            gameMode: -1
                        },
                        9: {
                            gameId: 49,
                            gameMode: -1
                        },
                        10: {
                            gameId: 40,
                            gameMode: 3
                        }
                    },
                    subfilter: {
                        0: {
                            name: "All",
                            filter: {
                                0: {
                                    gameId: 40,
                                    gameMode: 1
                                },
                                1: {
                                    gameId: 41,
                                    gameMode: -1
                                },
                                2: {
                                    gameId: 42,
                                    gameMode: -1
                                },
                                3: {
                                    gameId: 43,
                                    gameMode: -1
                                },
                                4: {
                                    gameId: 44,
                                    gameMode: -1
                                },
                                5: {
                                    gameId: 45,
                                    gameMode: -1
                                },
                                6: {
                                    gameId: 46,
                                    gameMode: -1
                                },
                                7: {
                                    gameId: 47,
                                    gameMode: -1
                                },
                                8: {
                                    gameId: 48,
                                    gameMode: -1
                                },
                                9: {
                                    gameId: 49,
                                    gameMode: -1
                                },
                                10: {
                                    gameId: 40,
                                    gameMode: 3
                                }
                            }
                        },
                        1: {
                            name: "NLHE",
                            filter: {
                                0: {
                                    gameId: 40,
                                    gameMode: 1
                                },
                                1: {
                                    gameId: 41,
                                    gameMode: -1
                                },
                                2: {
                                    gameId: 42,
                                    gameMode: -1
                                },
                                3: {
                                    gameId: 43,
                                    gameMode: -1
                                },
                                4: {
                                    gameId: 44,
                                    gameMode: -1
                                },
                                5: {
                                    gameId: 45,
                                    gameMode: -1
                                },
                                6: {
                                    gameId: 46,
                                    gameMode: -1
                                },
                                7: {
                                    gameId: 47,
                                    gameMode: -1
                                },
                                8: {
                                    gameId: 48,
                                    gameMode: -1
                                },
                                9: {
                                    gameId: 49,
                                    gameMode: -1
                                }
                            }
                        },
                        2: {
                            name: "PLO",
                            filter: {
                                0: {}
                            }
                        },
                        3: {
                            name: "SD",
                            filter: {
                                0: {
                                    gameId: 40,
                                    gameMode: 3
                                }
                            }
                        },
                        4: {
                            name: "Low",
                            filter: {
                                0: {}
                            }
                        },
                        5: {
                            name: "Mid",
                            filter: {
                                0: {}
                            }
                        },
                        6: {
                            name: "High",
                            filter: {
                                0: {}
                            }
                        }
                    },
                    groups: {
                        14: {
                            index: 0,
                            usdStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 4e4,
                                maxBuyIn: 2e5
                            },
                            cnyStake: {
                                stake: [1e3, 2e3, 4e3],
                                minBuyIn: 285e3,
                                maxBuyIn: 1421e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [100, 200, 400],
                                    ante: 100,
                                    currencyType: 101
                                }
                            }
                        },
                        13: {
                            index: 1,
                            usdStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 2e4,
                                maxBuyIn: 1e5
                            },
                            cnyStake: {
                                stake: [200, 400, 800],
                                minBuyIn: 143e3,
                                maxBuyIn: 711e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 50,
                                    currencyType: 101
                                }
                            }
                        },
                        12: {
                            index: 2,
                            usdStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 11300,
                                maxBuyIn: 56400
                            },
                            cnyStake: {
                                stake: [200, 400, 800],
                                minBuyIn: 8e4,
                                maxBuyIn: 4e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [200, 400, 800],
                                    ante: 200,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [25, 50, 100],
                                    ante: 25,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [200, 400],
                                    ante: 1e3,
                                    currencyType: 0
                                }
                            }
                        },
                        11: {
                            index: 3,
                            usdStake: {
                                stake: [10, 25, 50],
                                minBuyIn: 5700,
                                maxBuyIn: 28200
                            },
                            cnyStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 4e4,
                                maxBuyIn: 2e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [100, 200, 400],
                                    ante: 100,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [100, 200],
                                    ante: 500,
                                    currencyType: 0
                                }
                            }
                        },
                        10: {
                            index: 4,
                            usdStake: {
                                stake: [5, 10, 25],
                                minBuyIn: 2900,
                                maxBuyIn: 14100
                            },
                            cnyStake: {
                                stake: [50, 100],
                                ante: 250,
                                minBuyIn: 2e4,
                                maxBuyIn: 1e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100],
                                    ante: 250,
                                    currencyType: 0
                                }
                            }
                        },
                        9: {
                            index: 5,
                            usdStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1500,
                                maxBuyIn: 14100
                            },
                            cnyStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 1e4,
                                maxBuyIn: 1e5
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 50,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [5, 10, 20],
                                    ante: 5,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [25, 50],
                                    ante: 125,
                                    currencyType: 0
                                }
                            }
                        },
                        8: {
                            index: 6,
                            usdStake: {
                                stake: [3, 5, 10],
                                minBuyIn: 710,
                                maxBuyIn: 7100
                            },
                            cnyStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 5e3,
                                maxBuyIn: 5e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50, 100],
                                    ante: 25,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [10, 20],
                                    ante: 50,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [1, 2],
                                    ante: 5,
                                    currencyType: 101
                                }
                            }
                        },
                        7: {
                            index: 7,
                            usdStake: {
                                stake: [2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 1200
                            },
                            cnyStake: {
                                stake: [20, 40],
                                minBuyIn: 1500,
                                maxBuyIn: 8600
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4],
                                    currencyType: 101
                                }
                            }
                        },
                        6: {
                            index: 8,
                            usdStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 290,
                                maxBuyIn: 2900
                            },
                            cnyStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 2e3,
                                maxBuyIn: 2e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [10, 20, 40],
                                    ante: 5,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [10, 20, 40],
                                    ante: 10,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [5, 10],
                                    ante: 25,
                                    currencyType: 0
                                },
                                3: {
                                    stake: [.5, 1],
                                    ante: 2.5,
                                    currencyType: 101
                                },
                                4: {
                                    stake: [1, 2],
                                    ante: .5,
                                    currencyType: 101
                                }
                            }
                        },
                        5: {
                            index: 9,
                            usdStake: {
                                stake: [1, 2],
                                minBuyIn: 100,
                                maxBuyIn: 600
                            },
                            cnyStake: {
                                stake: [10, 20],
                                minBuyIn: 720,
                                maxBuyIn: 4300
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2],
                                    currencyType: 101
                                }
                            }
                        },
                        4: {
                            index: 10,
                            usdStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 150,
                                maxBuyIn: 1500
                            },
                            cnyStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [5, 10, 20],
                                    ante: 2,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [5, 10, 20],
                                    ante: 5,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [.5, 1, 2],
                                    ante: .5,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [.5, 1],
                                    ante: .25,
                                    currencyType: 101
                                },
                                4: {
                                    stake: [2, 4],
                                    ante: 10,
                                    currencyType: 0
                                }
                            }
                        },
                        3: {
                            index: 11,
                            usdStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 60,
                                maxBuyIn: 570
                            },
                            cnyStake: {
                                stake: [2, 4, 8],
                                minBuyIn: 400,
                                maxBuyIn: 4e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4, 8],
                                    ante: 2,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [.2, .5, 1],
                                    ante: .2,
                                    currencyType: 101
                                },
                                2: {
                                    stake: [.1, .2],
                                    ante: .5,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [1, 2],
                                    ante: 5,
                                    currencyType: 0
                                }
                            }
                        },
                        2: {
                            index: 12,
                            usdStake: {
                                stake: [.1, .2, .4],
                                minBuyIn: 30,
                                maxBuyIn: 290
                            },
                            cnyStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 2e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2, 4],
                                    currencyType: 0
                                },
                                1: {
                                    stake: [1, 2, 4],
                                    ante: 1,
                                    currencyType: 0
                                },
                                2: {
                                    stake: [.1, .2, .4],
                                    ante: .1,
                                    currencyType: 101
                                },
                                3: {
                                    stake: [.05, .1],
                                    ante: .25,
                                    currencyType: 101
                                }
                            }
                        },
                        1: {
                            index: 13,
                            usdStake: {
                                stake: [.05, .1, .2],
                                minBuyIn: 10,
                                maxBuyIn: 100
                            },
                            cnyStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 80,
                                maxBuyIn: 720
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.05, .1, .2],
                                    ante: .05,
                                    currencyType: 101
                                }
                            }
                        },
                        0: {
                            index: 14,
                            usdStake: {
                                stake: [.02, .05, .1],
                                minBuyIn: 5,
                                maxBuyIn: 50
                            },
                            cnyStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 40,
                                maxBuyIn: 360
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.02, .05, .1],
                                    currencyType: 101
                                },
                                1: {
                                    stake: [.02, .05, .1],
                                    ante: .02,
                                    currencyType: 101
                                }
                            }
                        },
                        16: {
                            index: 15,
                            usdStake: {
                                stake: [0, .5],
                                ante: .5,
                                minBuyIn: 25,
                                maxBuyIn: 25
                            },
                            cnyStake: {
                                stake: [0, 5],
                                ante: 5,
                                minBuyIn: 200,
                                maxBuyIn: 200
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 5],
                                    ante: 5,
                                    currencyType: 0
                                }
                            }
                        },
                        17: {
                            index: 16,
                            usdStake: {
                                stake: [0, .01],
                                ante: .01,
                                minBuyIn: .2,
                                maxBuyIn: .2
                            },
                            cnyStake: {
                                stake: [0, .02],
                                ante: .02,
                                minBuyIn: .8,
                                maxBuyIn: .8
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, .02],
                                    ante: .02,
                                    currencyType: 0
                                }
                            }
                        }
                    }
                },
                plo: {
                    index: 4,
                    name: "plo",
                    provider: 1,
                    showMyGameFilter: {
                        mobile: !1,
                        landscape: !0
                    },
                    isDisableGroup: !1,
                    filter: {
                        0: {
                            gameId: 90,
                            gameMode: 1
                        },
                        1: {
                            gameId: 91,
                            gameMode: 1
                        }
                    },
                    subfilter: {
                        0: {
                            name: "All",
                            filter: {
                                0: {
                                    gameId: 90,
                                    gameMode: 1
                                },
                                1: {
                                    gameId: 91,
                                    gameMode: 1
                                }
                            }
                        },
                        1: {
                            name: "PLO4",
                            filter: {
                                0: {
                                    gameId: 90,
                                    gameMode: 1
                                }
                            }
                        },
                        2: {
                            name: "PLO5",
                            filter: {
                                0: {
                                    gameId: 91,
                                    gameMode: 1
                                }
                            }
                        }
                    },
                    groups: {
                        26: {
                            index: 0,
                            usdStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 8e3,
                                maxBuyIn: 8e3
                            },
                            cnyStake: {
                                stake: [400, 800, 1500],
                                minBuyIn: 8e4,
                                maxBuyIn: 8e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 20,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [100, 200],
                                    ante: 40,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        25: {
                            index: 1,
                            usdStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 4e3,
                                maxBuyIn: 4e3
                            },
                            cnyStake: {
                                stake: [200, 400, 800],
                                minBuyIn: 4e4,
                                maxBuyIn: 4e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50, 100],
                                    ante: 10,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        24: {
                            index: 2,
                            usdStake: {
                                stake: [25, 50],
                                minBuyIn: 2e3,
                                maxBuyIn: 2e3
                            },
                            cnyStake: {
                                stake: [250, 500],
                                minBuyIn: 25e3,
                                maxBuyIn: 25e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50],
                                    ante: 10,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        23: {
                            index: 3,
                            usdStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 1600,
                                maxBuyIn: 1600
                            },
                            cnyStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 2e4,
                                maxBuyIn: 2e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [100, 200, 400],
                                    ante: 100,
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        22: {
                            index: 4,
                            usdStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 1600,
                                maxBuyIn: 1600
                            },
                            cnyStake: {
                                stake: [100, 200, 400],
                                minBuyIn: 2e4,
                                maxBuyIn: 2e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [10, 20, 40],
                                    ante: 4,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        21: {
                            index: 5,
                            usdStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 800,
                                maxBuyIn: 800
                            },
                            cnyStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 1e4,
                                maxBuyIn: 1e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [50, 100, 200],
                                    ante: 50,
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        20: {
                            index: 6,
                            usdStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 800,
                                maxBuyIn: 800
                            },
                            cnyStake: {
                                stake: [50, 100, 200],
                                minBuyIn: 1e4,
                                maxBuyIn: 1e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [5, 10, 20],
                                    ante: 2,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [10, 20],
                                    ante: 4,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        19: {
                            index: 7,
                            usdStake: {
                                stake: [3, 6, 12],
                                minBuyIn: 500,
                                maxBuyIn: 500
                            },
                            cnyStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 5e3,
                                maxBuyIn: 5e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50, 100],
                                    ante: 25,
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        18: {
                            index: 8,
                            usdStake: {
                                stake: [3, 6, 12],
                                minBuyIn: 500,
                                maxBuyIn: 500
                            },
                            cnyStake: {
                                stake: [25, 50, 100],
                                minBuyIn: 5e3,
                                maxBuyIn: 5e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [3, 6, 12],
                                    ante: 1.2,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        17: {
                            index: 9,
                            usdStake: {
                                stake: [5, 10],
                                minBuyIn: 400,
                                maxBuyIn: 400
                            },
                            cnyStake: {
                                stake: [50, 100],
                                minBuyIn: 5e3,
                                maxBuyIn: 5e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [5, 10],
                                    ante: 2,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        16: {
                            index: 10,
                            usdStake: {
                                stake: [2, 4, 8],
                                minBuyIn: 320,
                                maxBuyIn: 320
                            },
                            cnyStake: {
                                stake: [20, 40, 80],
                                minBuyIn: 4e3,
                                maxBuyIn: 4e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4, 8],
                                    ante: .8,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        15: {
                            index: 11,
                            usdStake: {
                                stake: [3, 6],
                                minBuyIn: 240,
                                maxBuyIn: 240
                            },
                            cnyStake: {
                                stake: [25, 50],
                                minBuyIn: 2500,
                                maxBuyIn: 2500
                            },
                            tablesFilter: {
                                0: {
                                    stake: [25, 50],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        14: {
                            index: 12,
                            usdStake: {
                                stake: [3, 6],
                                minBuyIn: 240,
                                maxBuyIn: 240
                            },
                            cnyStake: {
                                stake: [25, 50],
                                minBuyIn: 2500,
                                maxBuyIn: 2500
                            },
                            tablesFilter: {
                                0: {
                                    stake: [3, 6],
                                    ante: 1.2,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        13: {
                            index: 13,
                            usdStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 160,
                                maxBuyIn: 160
                            },
                            cnyStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 2e3,
                                maxBuyIn: 2e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [10, 20, 40],
                                    ante: 10,
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        12: {
                            index: 14,
                            usdStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 160,
                                maxBuyIn: 160
                            },
                            cnyStake: {
                                stake: [10, 20, 40],
                                minBuyIn: 2e3,
                                maxBuyIn: 2e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2, 4],
                                    ante: .4,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [2, 4],
                                    ante: .8,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        11: {
                            index: 15,
                            usdStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 80,
                                maxBuyIn: 80
                            },
                            cnyStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [5, 10, 20],
                                    ante: 5,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [10, 20],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        10: {
                            index: 16,
                            usdStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 80,
                                maxBuyIn: 80
                            },
                            cnyStake: {
                                stake: [5, 10, 20],
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2],
                                    ante: .4,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [.5, 1, 2],
                                    ante: .2,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        9: {
                            index: 17,
                            usdStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 40,
                                maxBuyIn: 40
                            },
                            cnyStake: {
                                stake: [2, 4, 8],
                                minBuyIn: 400,
                                maxBuyIn: 400
                            },
                            tablesFilter: {
                                0: {
                                    stake: [2, 4, 8],
                                    ante: 2,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [5, 10],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        8: {
                            index: 18,
                            usdStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 40,
                                maxBuyIn: 40
                            },
                            cnyStake: {
                                stake: [2, 4, 8],
                                minBuyIn: 400,
                                maxBuyIn: 400
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.2, .5, 1],
                                    ante: .1,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        7: {
                            index: 19,
                            usdStake: {
                                stake: [.1, .2, .5],
                                minBuyIn: 20,
                                maxBuyIn: 20
                            },
                            cnyStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 200
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2, 4],
                                    ante: 1,
                                    currencyType: 0
                                },
                                1: {
                                    stake: [2, 4],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        6: {
                            index: 20,
                            usdStake: {
                                stake: [.2, .5],
                                minBuyIn: 20,
                                maxBuyIn: 20
                            },
                            cnyStake: {
                                stake: [2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 200
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.2, .5],
                                    ante: .1,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        5: {
                            index: 21,
                            usdStake: {
                                stake: [.1, .2, .4],
                                minBuyIn: 20,
                                maxBuyIn: 20
                            },
                            cnyStake: {
                                stake: [1, 2, 4],
                                minBuyIn: 200,
                                maxBuyIn: 200
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.1, .2, .4],
                                    ante: .04,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        4: {
                            index: 22,
                            usdStake: {
                                stake: [.1, .2],
                                minBuyIn: 10,
                                maxBuyIn: 10
                            },
                            cnyStake: {
                                stake: [1, 2],
                                minBuyIn: 100,
                                maxBuyIn: 100
                            },
                            tablesFilter: {
                                0: {
                                    stake: [1, 2],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        3: {
                            index: 23,
                            usdStake: {
                                stake: [.05, .1, .2],
                                ante: .02,
                                minBuyIn: 10,
                                maxBuyIn: 10
                            },
                            cnyStake: {
                                stake: [.5, 1, 2],
                                minBuyIn: 100,
                                maxBuyIn: 100
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.05, .1, .2],
                                    ante: .02,
                                    currencyType: 101
                                },
                                1: {
                                    stake: [.1, .2],
                                    ante: .04,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        2: {
                            index: 24,
                            usdStake: {
                                stake: [.02, .05, .1],
                                ante: .01,
                                minBuyIn: 5,
                                maxBuyIn: 5
                            },
                            cnyStake: {
                                stake: [.2, .5, 1],
                                minBuyIn: 50,
                                maxBuyIn: 50
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.02, .05, .1],
                                    ante: .01,
                                    currencyType: 101
                                }
                            },
                            gameIds: [91]
                        },
                        1: {
                            index: 25,
                            usdStake: {
                                stake: [.02, .05],
                                minBuyIn: 5,
                                maxBuyIn: 5
                            },
                            cnyStake: {
                                stake: [.2, .5],
                                minBuyIn: 25,
                                maxBuyIn: 25
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.2, .5],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        },
                        0: {
                            index: 26,
                            usdStake: {
                                stake: [.01, .02],
                                minBuyIn: 1,
                                maxBuyIn: 1
                            },
                            cnyStake: {
                                stake: [.1, .2],
                                minBuyIn: 10,
                                maxBuyIn: 10
                            },
                            tablesFilter: {
                                0: {
                                    stake: [.1, .2],
                                    currencyType: 0
                                }
                            },
                            gameIds: [90]
                        }
                    }
                },
                short_deck: {
                    index: 3,
                    name: "short_deck",
                    provider: 1,
                    showMyGameFilter: {
                        mobile: !1,
                        landscape: !0
                    },
                    isDisableGroup: !1,
                    filter: {
                        0: {
                            gameId: 2,
                            gameMode: 3
                        },
                        1: {
                            gameId: 3,
                            gameMode: 3
                        }
                    },
                    groups: {
                        12: {
                            index: 0,
                            usdStake: {
                                stake: [0, 50],
                                ante: 50,
                                minBuyIn: 2500,
                                maxBuyIn: 2500
                            },
                            cnyStake: {
                                stake: [0, 500],
                                ante: 500,
                                minBuyIn: 2e4,
                                maxBuyIn: 2e4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 500],
                                    ante: 500,
                                    currencyType: 0
                                }
                            }
                        },
                        11: {
                            index: 1,
                            usdStake: {
                                stake: [0, 25],
                                ante: 25,
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            cnyStake: {
                                stake: [0, 200],
                                ante: 200,
                                minBuyIn: 8e3,
                                maxBuyIn: 8e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 200],
                                    ante: 200,
                                    currencyType: 0
                                }
                            }
                        },
                        10: {
                            index: 2,
                            usdStake: {
                                stake: [0, 10],
                                ante: 10,
                                minBuyIn: 500,
                                maxBuyIn: 500
                            },
                            cnyStake: {
                                stake: [0, 100],
                                ante: 100,
                                minBuyIn: 4e3,
                                maxBuyIn: 4e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 100],
                                    ante: 100,
                                    currencyType: 0
                                }
                            }
                        },
                        9: {
                            index: 3,
                            usdStake: {
                                stake: [0, 5],
                                ante: 5,
                                minBuyIn: 250,
                                maxBuyIn: 250
                            },
                            cnyStake: {
                                stake: [0, 50],
                                ante: 50,
                                minBuyIn: 2e3,
                                maxBuyIn: 2e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 50],
                                    ante: 50,
                                    currencyType: 0
                                }
                            }
                        },
                        8: {
                            index: 4,
                            usdStake: {
                                stake: [0, 3],
                                ante: 3,
                                minBuyIn: 150,
                                maxBuyIn: 150
                            },
                            cnyStake: {
                                stake: [0, 25],
                                ante: 25,
                                minBuyIn: 1e3,
                                maxBuyIn: 1e3
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 25],
                                    ante: 25,
                                    currencyType: 0
                                }
                            }
                        },
                        7: {
                            index: 5,
                            usdStake: {
                                stake: [0, 1],
                                ante: 1,
                                minBuyIn: 50,
                                maxBuyIn: 50
                            },
                            cnyStake: {
                                stake: [0, 10],
                                ante: 10,
                                minBuyIn: 400,
                                maxBuyIn: 400
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 10],
                                    ante: 10,
                                    currencyType: 0
                                }
                            }
                        },
                        6: {
                            index: 6,
                            usdStake: {
                                stake: [0, .5],
                                ante: .5,
                                minBuyIn: 25,
                                maxBuyIn: 25
                            },
                            cnyStake: {
                                stake: [0, 5],
                                ante: 5,
                                minBuyIn: 200,
                                maxBuyIn: 200
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 5],
                                    ante: 5,
                                    currencyType: 0
                                }
                            }
                        },
                        5: {
                            index: 7,
                            usdStake: {
                                stake: [0, .2],
                                ante: .2,
                                minBuyIn: 10,
                                maxBuyIn: 10
                            },
                            cnyStake: {
                                stake: [0, 2],
                                ante: 2,
                                minBuyIn: 80,
                                maxBuyIn: 80
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 2],
                                    ante: 2,
                                    currencyType: 0
                                }
                            }
                        },
                        4: {
                            index: 8,
                            usdStake: {
                                stake: [0, .1],
                                ante: .1,
                                minBuyIn: 5,
                                maxBuyIn: 5
                            },
                            cnyStake: {
                                stake: [0, 1],
                                ante: 1,
                                minBuyIn: 40,
                                maxBuyIn: 40
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, 1],
                                    ante: 1,
                                    currencyType: 0
                                }
                            }
                        },
                        3: {
                            index: 9,
                            usdStake: {
                                stake: [0, .05],
                                ante: .05,
                                minBuyIn: 3,
                                maxBuyIn: 3
                            },
                            cnyStake: {
                                stake: [0, .5],
                                ante: .5,
                                minBuyIn: 20,
                                maxBuyIn: 20
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, .5],
                                    ante: .5,
                                    currencyType: 0
                                }
                            }
                        },
                        2: {
                            index: 10,
                            usdStake: {
                                stake: [0, .02],
                                ante: .02,
                                minBuyIn: 1,
                                maxBuyIn: 1
                            },
                            cnyStake: {
                                stake: [0, .2],
                                ante: .2,
                                minBuyIn: 8,
                                maxBuyIn: 8
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, .2],
                                    ante: .2,
                                    currencyType: 0
                                }
                            }
                        },
                        1: {
                            index: 11,
                            usdStake: {
                                stake: [0, .01],
                                ante: .01,
                                minBuyIn: .5,
                                maxBuyIn: .5
                            },
                            cnyStake: {
                                stake: [0, .1],
                                ante: .1,
                                minBuyIn: 4,
                                maxBuyIn: 4
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, .1],
                                    ante: .1,
                                    currencyType: 0
                                }
                            }
                        },
                        0: {
                            index: 12,
                            usdStake: {
                                stake: [0, .01],
                                ante: .01,
                                minBuyIn: .2,
                                maxBuyIn: .2
                            },
                            cnyStake: {
                                stake: [0, .02],
                                ante: .02,
                                minBuyIn: .8,
                                maxBuyIn: .8
                            },
                            tablesFilter: {
                                0: {
                                    stake: [0, .02],
                                    ante: .02,
                                    currencyType: 0
                                }
                            }
                        }
                    }
                },
                sng: {
                    index: 5,
                    name: "sng",
                    provider: 0,
                    filter: {
                        0: {
                            gameListId: 3,
                            platform: 4
                        }
                    }
                }
            }, this.mtt = {
                showLobbyTab: !0,
                useAPI: !1,
                platform: 1,
                disableTournamentEndedPopup: !1,
                enableSNGTournaments: !0,
                enablePrivateTournaments: !1
            }, this.showPromoArea = !1, this.banner = {
                showPageViewBanners: !1,
                showCowboyBanner: !0,
                showPokerMasterBanner: !1
            }, this.showNotificationIcon = !1, this.playerLocksIntervalCheck = 60, this.hideRunningTournaments = !1, this.useLobbyV2 = !1, this.showAvgPotInLobbyV2 = !1, this.isEnableBanner = !0, this.restrictedNationFlagCodes = ["AF", "AL", "AS", "AO", "AM", "AW", "AU", "AT", "BY", "BE", "BQ", "BG", "BF", "KH", "CM", "CA-ON", "KY", "CF", "CX", "CC", "CO", "CD", "CG", "CU", "CW", "CY", "CZ", "DK", "GQ", "ER", "EE", "ET", "FR", "GF", "PF", "TF", "DE", "GI", "GR", "GP", "GU", "GW", "HT", "VA", "HU", "IR", "IQ", "IL", "IT", "JM", "JP", "JO", "KE", "KP", "KR", "LV", "LB", "LS", "LY", "LT", "MG", "ML", "MT", "MQ", "YT", "MX", "MA", "MZ", "MM", "NP", "NL", "NC", "NI", "NE", "NG", "NF", "GB-NIR", "MP", "PK", "PE", "PH", "PT", "PR", "RE", "RO", "RU", "BL", "MF", "PM", "SN", "SG", "SX", "SK", "SO", "SS", "ES", "SD", "SE", "CH", "SY", "TZ", "TR", "UG", "UA", "AE", "GB", "UM", "US", "VU", "VG", "VI", "WF", "YE", "ZW"], this.set(...e)
        }
        set(...e) {
            e.forEach((e => {
                e.mtt = {
                    ...this.mtt,
                    ...e.mtt
                }, Object.assign(this, e)
            }), this)
        }
    }), a._RF.pop()
}