// Use an IIFE (Immediately Invoked Function Expression) to encapsulate game state.
// This makes 'resources' and most internal functions private, preventing direct console manipulation.
const game = (() => {
    let resources = {
        timePlayed: {
            hour: 0,
            minute: 0,
            second: 0
        },
        lastMessage: "",
  player: {
            atk: 0,
            def: 0,
            hp: 100,
            currentHp: 100,
            sp: 0,
            spflag: false


          },
  wood: {
        count: 0,
        perSecond: 0,
        manualClickAmount: 1,
        upgradeCost: 10,
        upgradeMultiplier: 2,
        upgradeAmount: 1,
        automationCost: 10000,
        automationMultiplier: 1.5,
        automationAmount: 5,
        stage: 1,
        criticalChance: 0.10,
        criticalMultiplier: 5
    },
    stone: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'stone',
        stage: 1,
        perUnitProduction: 1
    },
    iron: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'iron',
        stage: 1,
        perUnitProduction: 1
    },
    alloy: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'alloy',
        stage: 1,
        perUnitProduction: 1
    },
    circuitry: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'circuitry',
        stage: 1,
        perUnitProduction: 1
    },
    aiCore: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'aiCore',
        stage: 1,
        perUnitProduction: 1
    },
    consciousness: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'consciousness',
        stage: 1,
        perUnitProduction: 1
    },
    realityShard: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'realityShard',
        stage: 1,
        perUnitProduction: 1
    },
    paradox: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'paradox',
        stage: 1,
        perUnitProduction: 1
    },
    singularity: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'singularity',
        stage: 1,
        perUnitProduction: 1
    },
    multiverse: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'multiverse',
        stage: 1,
        perUnitProduction: 1
    },
    omniscience: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'omniscience',
        stage: 1,
        perUnitProduction: 1
    },
    genesis: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'genesis',
        stage: 1,
        perUnitProduction: 1
    },
    void: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000,
        produces: 'void',
        stage: 1,
        perUnitProduction: 1
    },
    theAll: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theAll',
        stage: 2,
        perUnitProduction: 1
    },
    transcendence: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'transcendence',
        stage: 2,
        perUnitProduction: 1
    },
    theAbsolute: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theAbsolute',
        stage: 2,
        perUnitProduction: 1
    },
    theEnd: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theEnd',
        stage: 2,
        perUnitProduction: 1
    },
    theNewBeginning: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theNewBeginning',
        stage: 2,
        perUnitProduction: 1
    },
    theArchitectsWill: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theArchitectsWill',
        stage: 2,
        perUnitProduction: 1
    },
    theOmniverse: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000,
        produces: 'theOmniverse',
        stage: 2,
        perUnitProduction: 1
    },
    theBoundlessVoid: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000,
        produces: 'theBoundlessVoid',
        stage: 3,
        perUnitProduction: 1
    },
    cosmicFabric: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000,
        produces: 'cosmicFabric',
        stage: 3,
        perUnitProduction: 1
    },
    infiniteNexus: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000,
        produces: 'infiniteNexus',
        stage: 3,
        perUnitProduction: 1
    },
    eternalEcho: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000,
        produces: 'eternalEcho',
        stage: 3,
        perUnitProduction: 1
    },
    zenithOfCreation: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000,
        produces: 'zenithOfCreation',
        stage: 3,
        perUnitProduction: 1
    },
    universalSingularity: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'universalSingularity',
        stage: 4,
        perUnitProduction: 1
    },
    existentialFabric: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'existentialFabric',
        stage: 4,
        perUnitProduction: 1
    },
    temporalFlux: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'temporalFlux',
        stage: 4,
        perUnitProduction: 1
    },
    multidimensionalHarmony: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'multidimensionalHarmony',
        stage: 4,
        perUnitProduction: 1
    },
    cosmicAwakening: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'cosmicAwakening',
        stage: 4,
        perUnitProduction: 1
    },
    divineSpark: {
        count: 0,
        perSecond: 0,
        conversionCost: 1000000,
        produces: 'divineSpark',
        stage: 4,
        perUnitProduction: 1
    },
    // Stage 5 Resources
    cosmicDust: {
        count: 0,
        perSecond: 0,
        conversionCost: 5000000,
        produces: 'cosmicDust',
        stage: 5,
        perUnitProduction: 1
    },
    stellarNucleus: {
        count: 0,
        perSecond: 0,
        conversionCost: 5000000,
        produces: 'stellarNucleus',
        stage: 5,
        perUnitProduction: 1
    },
    galacticCore: {
        count: 0,
        perSecond: 0,
        conversionCost: 5000000,
        produces: 'galacticCore',
        stage: 5,
        perUnitProduction: 1
    },
    // Stage 6 Resources
    quantumEntanglement: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000000,
        produces: 'quantumEntanglement',
        stage: 6,
        perUnitProduction: 1
    },
    dimensionalRift: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000000,
        produces: 'dimensionalRift',
        stage: 6,
        perUnitProduction: 1
    },
    realityAnchor: {
        count: 0,
        perSecond: 0,
        conversionCost: 10000000,
        produces: 'realityAnchor',
        stage: 6,
        perUnitProduction: 1
    },
    // Stage 7 Resources
    omniEnergy: {
        count: 0,
        perSecond: 0,
        conversionCost: 50000000,
        produces: 'omniEnergy',
        stage: 7,
        perUnitProduction: 1
    },
    primeMover: {
        count: 0,
        perSecond: 0,
        conversionCost: 50000000,
        produces: 'primeMover',
        stage: 7,
        perUnitProduction: 1
    },
    trueCreator: {
        count: 0,
        perSecond: 0,
        conversionCost: 50000000,
        produces: 'trueCreator',
        stage: 7,
        perUnitProduction: 1
    },
    // Stage 8 Resources
    cosmicSingularity: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000000,
        produces: 'cosmicSingularity',
        stage: 8,
        perUnitProduction: 1
    },
    existentialTruth: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000000,
        produces: 'existentialTruth',
        stage: 8,
        perUnitProduction: 1
    },
    theUltimateForm: {
        count: 0,
        perSecond: 0,
        conversionCost: 100000000,
        produces: 'theUltimateForm',
        stage: 8,
        perUnitProduction: 1
      },
        // Stage 9 Resources
        cosmicNexus: {
            count: 0,
            perSecond: 0,
            conversionCost: 500000000,
            produces: 'cosmicNexus',
            stage: 9,
            perUnitProduction: 1
        },
        quantumSingularity: {
            count: 0,
            perSecond: 0,
            conversionCost: 500000000,
            produces: 'quantumSingularity',
                   stage: 9,
            perUnitProduction: 1
        },
        transcendentEssence: {
            count: 0,
            perSecond: 0,
            conversionCost: 500000000,
            produces: 'transcendentEssence',
                   stage: 9,
            perUnitProduction: 1
        },
        textToSpeechEnabled: false, // New property for TTS toggle
        language: 'en', // New property for current language
        apiKey: "" // Initialize apiKey here for persistence
    };

    // --- Translations Object ---
    const translations = {
        en: {
            gameTitle: "Ultimate Incremental Resource Game",
            gameStatsTitle: "Game Stats",
            timePlayedLabel: "Time Played",
            saveGameBtn: "Save Game",
            loadGameBtn: "Load Game",
            languageSectionTitle: "Language",
            currentLanguageLabel: "Current Language",
            currentLanguageDisplay: "English",
            languageToggleBtn: "Toggle Language",
            ttsTitle: "Text-to-Speech",
            ttsStatusLabel: "Status",
            ttsToggleBtn: "Toggle Text-to-Speech",
            quizTitle: "Quiz Time!",
            quizAnswerInputPlaceholder: "Type your answer here",
            submitQuizAnswer: "Submit Answer",
            stage1Title: "Stage 1",
            stage1Description: "Collect Basic Resources",
            woodTitle: "Wood",
            currentWoodLabel: "Current Wood",
            woodPerSecondLabel: "Wood per second",
            chopWoodBtnText: "Chop Wood",
            upgradeChopPowerBtnText: "Upgrade Chop Power",
            chopUpgradeCostLabel: "Cost",
            woodCostUnit: "Wood",
            automateWoodBtnText: "Automate Wood",
            woodAutoUnit: "Wood/sec",
            woodAutomationCostLabel: "Cost",
            woodAutoCostUnit: "Wood",
            criticalHitText: (amount) => `CRITICAL! +${amount} Wood!`,
            woodUpgradeAlert: (cost) => `Not enough Wood to upgrade Chop Power! You need ${cost} Wood.`,
            woodAutomationAlert: (cost) => `Not enough Wood to automate production! You need ${cost} Wood.`,
            stoneTitle: "Stone",
            currentStoneLabel: "Current Stone",
            stonePerSecondLabel: "Stone per second",
            buyStoneBtnText: "Convert 1000 Wood to 1 Stone",
            ironTitle: "Iron",
            currentIronLabel: "Current Iron",
            ironPerSecondLabel: "Iron per second",
            buyIronBtnText: "Convert 1000 Stone to 1 Iron",
            alloyTitle: "Alloy",
            currentAlloyLabel: "Current Alloy",
            alloyPerSecondLabel: "Alloy per second",
            buyAlloyBtnText: "Convert 1000 Iron to 1 Alloy",
            circuitryTitle: "Circuitry",
            currentCircuitryLabel: "Current Circuitry",
            circuitryPerSecondLabel: "Circuitry per second",
            buyCircuitryBtnText: "Convert 1000 Alloy to 1 Circuitry",
            aiCoreTitle: "AI Core",
            currentAICoreLabel: "Current AI Core",
            aiCorePerSecondLabel: "AI Core per second",
            buyAICoreBtnText: "Convert 1000 Circuitry to 1 AI Core",
            consciousnessTitle: "Consciousness",
            currentConsciousnessLabel: "Current Consciousness",
            consciousnessPerSecondLabel: "Consciousness per second",
            buyConsciousnessBtnText: "Convert 1000 AI Core to 1 Consciousness",
            realityShardTitle: "Reality Shard",
            currentRealityShardLabel: "Current Reality Shard",
            realityShardPerSecondLabel: "Reality Shard per second",
            buyRealityShardBtnText: "Convert 1000 Consciousness to 1 Reality Shard",
            paradoxTitle: "Paradox",
            currentParadoxLabel: "Current Paradox",
            paradoxPerSecondLabel: "Paradox per second",
            buyParadoxBtnText: "Convert 1000 Reality Shard to 1 Paradox",
            singularityTitle: "Singularity",
            currentSingularityLabel: "Current Singularity",
            singularityPerSecondLabel: "Singularity per second",
            buySingularityBtnText: "Convert 1000 Paradox to 1 Singularity",
            multiverseTitle: "Multiverse",
            currentMultiverseLabel: "Current Multiverse",
            multiversePerSecondLabel: "Multiverse per second",
            buyMultiverseBtnText: "Convert 1000 Singularity to 1 Multiverse",
            omniscienceTitle: "Omniscience",
            currentOmniscienceLabel: "Current Omniscience",
            omnisciencePerSecondLabel: "Omniscience per second",
            buyOmniscienceBtnText: "Convert 1000 Multiverse to 1 Omniscience",
            genesisTitle: "Genesis",
            currentGenesisLabel: "Current Genesis",
            genesisPerSecondLabel: "Genesis per second",
            buyGenesisBtnText: "Convert 1000 Omniscience to 1 Genesis",
            voidTitle: "Void",
            currentVoidLabel: "Current Void",
            voidPerSecondLabel: "Void per second",
            buyVoidBtnText: "Convert 1000 Genesis to 1 Void",
            stage2Title: "Stage 2: Reality Transformation",
            stage2Description: "You are shaping the universe! The cost of high-level resources has increased significantly.",
            theAllTitle: "The All",
            currentTheAllLabel: "Current The All",
            theAllPerSecondLabel: "The All per second",
            buyTheAllBtnText: (cost) => `Convert ${cost} Void to 1 The All`,
            transcendenceTitle: "Transcendence",
            currentTranscendenceLabel: "Current Transcendence",
            transcendencePerSecondLabel: "Transcendence per second",
            buyTranscendenceBtnText: (cost) => `Convert ${cost} The All to 1 Transcendence`,
            theAbsoluteTitle: "The Absolute",
            currentTheAbsoluteLabel: "Current The Absolute",
            theAbsolutePerSecondLabel: "The Absolute per second",
            buyTheAbsoluteBtnText: (cost) => `Convert ${cost} Transcendence to 1 The Absolute`,
            theEndTitle: "The End",
            currentTheEndLabel: "Current The End",
            theEndPerSecondLabel: "The End per second",
            buyTheEndBtnText: (cost) => `Convert ${cost} The Absolute to 1 The End`,
            theNewBeginningTitle: "The New Beginning",
            currentTheNewBeginningLabel: "Current The New Beginning",
            theNewBeginningPerSecondLabel: "The New Beginning per second",
            buyTheNewBeginningBtnText: (cost) => `Convert ${cost} The End to 1 The New Beginning`,
            theArchitectsWillTitle: "The Architect's Will",
            currentTheArchitectsWillLabel: "Current The Architect's Will",
            theArchitectsWillPerSecondLabel: "The Architect's Will per second",
            buyTheArchitectsWillBtnText: (cost) => `Convert ${cost} The New Beginning to 1 The Architect's Will`,
            theOmniverseTitle: "The Omniverse",
            currentTheOmniverseLabel: "Current The Omniverse",
            theOmniversePerSecondLabel: "The Omniverse per second",
            buyTheOmniverseBtnText: (cost) => `Convert ${cost} The Architect's Will to 1 The Omniverse`,
            stage3Title: "Stage 3: Universal Unification",
            stage3Description: "The final frontier of creation. Your will becomes reality!",
            theBoundlessVoidTitle: "The Boundless Void",
            currentTheBoundlessVoidLabel: "Current The Boundless Void",
            theBoundlessVoidPerSecondLabel: "The Boundless Void per second",
            buyTheBoundlessVoidBtnText: (cost) => `Convert ${cost} The Omniverse to 1 The Boundless Void`,
            cosmicFabricTitle: "Cosmic Fabric",
            currentCosmicFabricLabel: "Current Cosmic Fabric",
            cosmicFabricPerSecondLabel: "Cosmic Fabric per second",
            buyCosmicFabricBtnText: (cost) => `Convert ${cost} The Boundless Void to 1 Cosmic Fabric`,
            infiniteNexusTitle: "Infinite Nexus",
            currentInfiniteNexusLabel: "Current Infinite Nexus",
            infiniteNexusPerSecondLabel: "Infinite Nexus per second",
            buyInfiniteNexusBtnText: (cost) => `Convert ${cost} Cosmic Fabric to 1 Infinite Nexus`,
            eternalEchoTitle: "Eternal Echo",
            currentEternalEchoLabel: "Current Eternal Echo",
            eternalEchoPerSecondLabel: "Eternal Echo per second",
            buyEternalEchoBtnText: (cost) => `Convert ${cost} Infinite Nexus to 1 Eternal Echo`,
            zenithOfCreationTitle: "Zenith of Creation",
            currentZenithOfCreationLabel: "Current Zenith of Creation",
            zenithOfCreationPerSecondLabel: "Zenith of Creation per second",
            buyZenithOfCreationBtnText: (cost) => `Convert ${cost} Eternal Echo to 1 Zenith of Creation`,
            stage4Title: "Stage 4: Cosmic Awakening",
            stage4Description: "Unraveling the ultimate secrets of existence!",
            universalSingularityTitle: "Universal Singularity",
            currentUniversalSingularityLabel: "Current Universal Singularity",
            universalSingularityPerSecondLabel: "Universal Singularity per second",
            buyUniversalSingularityBtnText: (cost) => `Convert ${cost} Zenith of Creation to 1 Universal Singularity`,
            existentialFabricTitle: "Existential Fabric",
            currentExistentialFabricLabel: "Current Existential Fabric",
            existentialFabricPerSecondLabel: "Existential Fabric per second",
            buyExistentialFabricBtnText: (cost) => `Convert ${cost} Universal Singularity to 1 Existential Fabric`,
            temporalFluxTitle: "Temporal Flux",
            currentTemporalFluxLabel: "Current Temporal Flux",
            temporalFluxPerSecondLabel: "Temporal Flux per second",
            buyTemporalFluxBtnText: (cost) => `Convert ${cost} Existential Fabric to 1 Temporal Flux`,
            multidimensionalHarmonyTitle: "Multidimensional Harmony",
            currentMultidimensionalHarmonyLabel: "Current Multidimensional Harmony",
            multidimensionalHarmonyPerSecondLabel: "Multidimensional Harmony per second",
            buyMultidimensionalHarmonyBtnText: (cost) => `Convert ${cost} Temporal Flux to 1 Multidimensional Harmony`,
            cosmicAwakeningTitle: "Cosmic Awakening",
            currentCosmicAwakeningLabel: "Current Cosmic Awakening",
            cosmicAwakeningPerSecondLabel: "Cosmic Awakening per second",
            buyCosmicAwakeningBtnText: (cost) => `Convert ${cost} Multidimensional Harmony to 1 Cosmic Awakening`,
            divineSparkTitle: "Divine Spark",
            currentDivineSparkLabel: "Current Divine Spark",
            divineSparkPerSecondLabel: "Divine Spark per second",
            buyDivineSparkBtnText: (cost) => `Convert ${cost} Cosmic Awakening to 1 Divine Spark`,
            stage5Title: "Stage 5: Cosmic Genesis",
            stage5Description: "You are now weaving the very fabric of the cosmos!",
            cosmicDustTitle: "Cosmic Dust",
            currentCosmicDustLabel: "Current Cosmic Dust",
            cosmicDustPerSecondLabel: "Cosmic Dust per second",
            buyCosmicDustBtnText: (cost) => `Convert ${cost} Divine Spark to 1 Cosmic Dust`,
            stellarNucleusTitle: "Stellar Nucleus",
            currentStellarNucleusLabel: "Current Stellar Nucleus",
            stellarNucleusPerSecondLabel: "Stellar Nucleus per second",
            buyStellarNucleusBtnText: (cost) => `Convert ${cost} Cosmic Dust to 1 Stellar Nucleus`,
            galacticCoreTitle: "Galactic Core",
            currentGalacticCoreLabel: "Current Galactic Core",
            galacticCorePerSecondLabel: "Galactic Core per second",
            buyGalacticCoreBtnText: (cost) => `Convert ${cost} Stellar Nucleus to 1 Galactic Core`,
            stage6Title: "Stage 6: Interdimensional Weave",
            stage6Description: "You are manipulating the very fabric of reality across dimensions!",
            quantumEntanglementTitle: "Quantum Entanglement",
            currentQuantumEntanglementLabel: "Current Quantum Entanglement",
            quantumEntanglementPerSecondLabel: "Quantum Entanglement per second",
            buyQuantumEntanglementBtnText: (cost) => `Convert ${cost} Galactic Core to 1 Quantum Entanglement`,
            dimensionalRiftTitle: "Dimensional Rift",
            currentDimensionalRiftLabel: "Current Dimensional Rift",
            dimensionalRiftPerSecondLabel: "Dimensional Rift per second",
            buyDimensionalRiftBtnText: (cost) => `Convert ${cost} Quantum Entanglement to 1 Dimensional Rift`,
            realityAnchorTitle: "Reality Anchor",
            currentRealityAnchorLabel: "Current Reality Anchor",
            realityAnchorPerSecondLabel: "Reality Anchor per second",
            buyRealityAnchorBtnText: (cost) => `Convert ${cost} Dimensional Rift to 1 Reality Anchor`,
            stage7Title: "Stage 7: Absolute Dominion",
            stage7Description: "You are becoming the ultimate power, dictating existence itself!",
            omniEnergyTitle: "Omni-Energy",
            currentOmniEnergyLabel: "Current Omni-Energy",
            omniEnergyPerSecondLabel: "Omni-Energy per second",
            buyOmniEnergyBtnText: (cost) => `Convert ${cost} Reality Anchor to 1 Omni-Energy`,
            primeMoverTitle: "Prime Mover",
            currentPrimeMoverLabel: "Current Prime Mover",
            primeMoverPerSecondLabel: "Prime Mover per second",
            buyPrimeMoverBtnText: (cost) => `Convert ${cost} Omni-Energy to 1 Prime Mover`,
            trueCreatorTitle: "True Creator",
            currentTrueCreatorLabel: "True Creator Current",
            trueCreatorPerSecondLabel: "True Creator per second",
            buyTrueCreatorBtnText: (cost) => `Convert ${cost} Prime Mover to 1 True Creator`,
            stage8Title: "Stage 8: Beyond Infinity",
            stage8Description: "You have transcended all limits. The game is nearing its ultimate conclusion!",
            cosmicSingularityTitle: "Cosmic Singularity",
            currentCosmicSingularityLabel: "Current Cosmic Singularity",
            cosmicSingularityPerSecondLabel: "Cosmic Singularity per second",
            buyCosmicSingularityBtnText: (cost) => `Convert ${cost} True Creator to 1 Cosmic Singularity`,
            existentialTruthTitle: "Existential Truth",
            currentExistentialTruthLabel: "Current Existential Truth",
            existentialTruthPerSecondLabel: "Existential Truth per second",
            buyExistentialTruthBtnText: (cost) => `Convert ${cost} Cosmic Singularity to 1 Existential Truth`,
            theUltimateFormTitle: "The Ultimate Form",
            currentTheUltimateFormLabel: "Current The Ultimate Form",
            theUltimateFormPerSecondLabel: "The Ultimate Form per second",
            buyTheUltimateFormBtnText: (cost) => `Convert ${cost} Existential Truth to 1 The Ultimate Form`,
            stage9Title: "Stage 9: Beyond the Veil",
            stage9Description: "You are now touching the very essence of creation!",
            cosmicNexusTitle: "Cosmic Nexus",
            currentCosmicNexusLabel: "Current Cosmic Nexus",
            cosmicNexusPerSecondLabel: "Cosmic Nexus per second",
            buyCosmicNexusBtnText: (cost) => `Convert ${cost} The Ultimate Form to 1 Cosmic Nexus`,
            quantumSingularityTitle: "Quantum Singularity",
            currentQuantumSingularityLabel: "Current Quantum Singularity",
            quantumSingularityPerSecondLabel: "Quantum Singularity per second",
            buyQuantumSingularityBtnText: (cost) => `Convert ${cost} Cosmic Nexus to 1 Quantum Singularity`,
            transcendentEssenceTitle: "Transcendent Essence",
            currentTranscendentEssenceLabel: "Current Transcendent Essence",
            transcendentEssencePerSecondLabel: "Transcendent Essence per second",
            buyTranscendentEssenceBtnText: (cost) => `Convert ${cost} Quantum Singularity to 1 Transcendent Essence`,
            generateLoreBtnText: "Generate Lore",
            loreGenerating: "Generating lore...",
            loreApiError: (status, statusText, errorData) => `API error: ${status} ${statusText} - ${JSON.stringify(errorData)}`,
            loreResponseError: "Could not generate lore. Unexpected response structure.",
            loreGenericError: "Error generating lore. Please try again. (Check console for details)",
            gameSaved: "Game progress saved!",
            gameLoadSuccess: "Game progress loaded!",
            gameLoadNoData: "No saved game data found.",
            gameLoadError: "Could not load game. Save data might be corrupted.",
            cheatActivated: "CHEAT ACTIVATED! +10,000 Wood!",
            quizCorrect: (reward) => `Correct! You received ${reward} Wood.`,
            quizIncorrect: (answer) => `Incorrect. The answer was "${answer}".`,
            quizNoMoreQuestions: "No more questions available!",
            starClickedNotification: (resourceName) => `You clicked the star! You will get more ${resourceName} per second`,
            ttsEnabled: "Text to speech enabled.",
            ttsDisabled: "Text-to-speech disabled.",
            discordInviteText: "Join our Discord server",
            buyResourceNotification: (resourceName) => `You bought 1 ${resourceName}!`,
            notEnoughResource: (prevResource, targetResource, cost) => `Not enough ${prevResource} to buy ${targetResource}! You need ${cost} ${prevResource}.`,
            starClickedNotificationError: "An error occurred while awarding star bonus. Please check console.",
            timeToNextResourceLabel: "Time to next resource",
            timeToNextResourceValue: (time) => `Next resource in: ${time}`,
            timeToNextResourceNone: "All resources acquired!"
        },
        vi: {
            gameTitle: "Trò Chơi Tăng Cường Tài Nguyên Tối Thượng",
            gameStatsTitle: "Thống Kê Trò Chơi",
            timePlayedLabel: "Thời Gian Chơi",
            saveGameBtn: "Lưu Trò Chơi",
            loadGameBtn: "Tải Trò Chơi",
            languageSectionTitle: "Ngôn Ngữ",
            currentLanguageLabel: "Ngôn Ngữ Hiện Tại",
            currentLanguageDisplay: "Tiếng Việt",
            languageToggleBtn: "Chuyển Đổi Ngôn Ngữ",
            ttsTitle: "Chuyển Văn Bản Thành Giọng Nói",
            ttsStatusLabel: "Trạng Thái",
            ttsToggleBtn: "Bật/Tắt Chuyển Văn Bản Thành Giọng Nói",
            quizTitle: "Thời Gian Đố Vui!",
            quizAnswerInputPlaceholder: "Nhập câu trả lời của bạn",
            submitQuizAnswer: "Gửi Câu Trả Lời",
            stage1Title: "Giai Đoạn 1",
            stage1Description: "Thu Thập Tài Nguyên Cơ Bản",
            woodTitle: "Gỗ",
            currentWoodLabel: "Gỗ Hiện Tại",
            woodPerSecondLabel: "Gỗ mỗi giây",
            chopWoodBtnText: "Chặt Gỗ",
            upgradeChopPowerBtnText: "Nâng Cấp Sức Mạnh Chặt",
            chopUpgradeCostLabel: "Chi Phí",
            woodCostUnit: "Gỗ",
            automateWoodBtnText: "Tự Động Hóa Gỗ",
            woodAutoUnit: "Gỗ/giây",
            woodAutomationCostLabel: "Chi Phí",
            woodAutoCostUnit: "Gỗ",
            criticalHitText: (amount) => `CHÍ MẠNG! +${amount} Gỗ!`,
            woodUpgradeAlert: (cost) => `Không đủ Gỗ để nâng cấp Sức Mạnh Chặt! Bạn cần ${cost} Gỗ.`,
            woodAutomationAlert: (cost) => `Không đủ Gỗ để tự động hóa sản xuất! Bạn cần ${cost} Gỗ.`,
            stoneTitle: "Đá",
            currentStoneLabel: "Đá Hiện Tại",
            stonePerSecondLabel: "Đá mỗi giây",
            buyStoneBtnText: "Chuyển đổi 1000 Gỗ thành 1 Đá",
            ironTitle: "Sắt",
            currentIronLabel: "Sắt Hiện Tại",
            ironPerSecondLabel: "Sắt mỗi giây",
            buyIronBtnText: "Chuyển đổi 1000 Đá thành 1 Sắt",
            alloyTitle: "Hợp Kim",
            currentAlloyLabel: "Hợp Kim Hiện Tại",
            alloyPerSecondLabel: "Hợp Kim mỗi giây",
            buyAlloyBtnText: "Chuyển đổi 1000 Sắt thành 1 Hợp Kim",
            circuitryTitle: "Mạch Điện",
            currentCircuitryLabel: "Mạch Điện Hiện Tại",
            circuitryPerSecondLabel: "Mạch Điện mỗi giây",
            buyCircuitryBtnText: "Chuyển đổi 1000 Hợp Kim thành 1 Mạch Điện",
            aiCoreTitle: "Lõi AI",
            currentAICoreLabel: "Lõi AI Hiện Tại",
            aiCorePerSecondLabel: "Lõi AI mỗi giây",
            buyAICoreBtnText: "Chuyển đổi 1000 Mạch Điện thành 1 Lõi AI",
            consciousnessTitle: "Ý Thức",
            currentConsciousnessLabel: "Ý Thức Hiện Tại",
            consciousnessPerSecondLabel: "Ý Thức mỗi giây",
            buyConsciousnessBtnText: "Chuyển đổi 1000 Lõi AI thành 1 Ý Thức",
            realityShardTitle: "Mảnh Vỡ Thực Tại",
            currentRealityShardLabel: "Mảnh Vỡ Thực Tại Hiện Tại",
            realityShardPerSecondLabel: "Mảnh Vỡ Thực Tại mỗi giây",
            buyRealityShardBtnText: "Chuyển đổi 1000 Ý Thức thành 1 Mảnh Vỡ Thực Tại",
            paradoxTitle: "Nghịch Lý",
            currentParadoxLabel: "Nghịch Lý Hiện Tại",
            paradoxPerSecondLabel: "Nghịch Lý mỗi giây",
            buyParadoxBtnText: "Chuyển đổi 1000 Mảnh Vỡ Thực Tại thành 1 Nghịch Lý",
            singularityTitle: "Điểm Kỳ Dị",
            currentSingularityLabel: "Điểm Kỳ Dị Hiện Tại",
            singularityPerSecondLabel: "Điểm Kỳ Dị mỗi giây",
            buySingularityBtnText: "Chuyển đổi 1000 Nghịch Lý thành 1 Điểm Kỳ Dị",
            multiverseTitle: "Đa Vũ Trụ",
            currentMultiverseLabel: "Đa Vũ Trụ Hiện Tại",
            multiversePerSecondLabel: "Đa Vũ Trụ mỗi giây",
            buyMultiverseBtnText: "Chuyển đổi 1000 Điểm Kỳ Dị thành 1 Đa Vũ Trụ",
            omniscienceTitle: "Toàn Tri",
            currentOmniscienceLabel: "Toàn Tri Hiện Tại",
            omnisciencePerSecondLabel: "Toàn Tri mỗi giây",
            buyOmniscienceBtnText: "Chuyển đổi 1000 Đa Vũ Trụ thành 1 Toàn Tri",
            genesisTitle: "Sáng Thế",
            currentGenesisLabel: "Sáng Thế Hiện Tại",
            genesisPerSecondLabel: "Sáng Thế mỗi giây",
            buyGenesisBtnText: "Chuyển đổi 1000 Toàn Tri thành 1 Sáng Thế",
            voidTitle: "Hư Không",
            currentVoidLabel: "Hư Không Hiện Tại",
            voidPerSecondLabel: "Hư Không mỗi giây",
            buyVoidBtnText: "Chuyển đổi 1000 Sáng Thế thành 1 Hư Không",
            stage2Title: "Giai Đoạn 2: Chuyển Đổi Thực Tại",
            stage2Description: "Bạn đang định hình vũ trụ! Chi phí tài nguyên cấp cao đã tăng đáng kể.",
            theAllTitle: "Tất Cả",
            currentTheAllLabel: "Tất Cả Hiện Tại",
            theAllPerSecondLabel: "Tất Cả mỗi giây",
            buyTheAllBtnText: (cost) => `Chuyển đổi ${cost} Hư Không thành 1 Tất Cả`,
            transcendenceTitle: "Siêu Việt",
            currentTranscendenceLabel: "Siêu Việt Hiện Tại",
            transcendencePerSecondLabel: "Siêu Việt mỗi giây",
            buyTranscendenceBtnText: (cost) => `Chuyển đổi ${cost} Tất Cả thành 1 Siêu Việt`,
            theAbsoluteTitle: "Tuyệt Đối",
            currentTheAbsoluteLabel: "Tuyệt Đối Hiện Tại",
            theAbsolutePerSecondLabel: "Tuyệt Đối mỗi giây",
            buyTheAbsoluteBtnText: (cost) => `Chuyển đổi ${cost} Siêu Việt thành 1 Tuyệt Đối`,
            theEndTitle: "Kết Thúc",
            currentTheEndLabel: "Kết Thúc Hiện Tại",
            theEndPerSecondLabel: "Kết Thúc mỗi giây",
            buyTheEndBtnText: (cost) => `Chuyển đổi ${cost} Tuyệt Đối thành 1 Kết Thúc`,
            theNewBeginningTitle: "Khởi Nguyên Mới", // Translated
            currentTheNewBeginningLabel: "Khởi Nguyên Mới Hiện Tại",
            theNewBeginningPerSecondLabel: "Khởi Nguyên Mới mỗi giây",
            buyTheNewBeginningBtnText: (cost) => `Chuyển đổi ${cost} Kết Thúc thành 1 Khởi Nguyên Mới`,
            theArchitectsWillTitle: "Ý Chí Kiến Trúc Sư",
            currentTheArchitectsWillLabel: "Ý Chí Kiến Trúc Sư Hiện Tại",
            theArchitectsWillPerSecondLabel: "Ý Chí Kiến Trúc Sư mỗi giây",
            buyTheArchitectsWillBtnText: (cost) => `Chuyển đổi ${cost} Khởi Đầu Mới thành 1 Ý Chí Kiến Trúc Sư`,
            theOmniverseTitle: "Toàn Vũ Trụ",
            currentTheOmniverseLabel: "Toàn Vũ Trụ Hiện Tại",
            theOmniversePerSecondLabel: "Toàn Vũ Trụ mỗi giây",
            buyTheOmniverseBtnText: (cost) => `Chuyển đổi ${cost} Ý Chí Kiến Trúc Sư thành 1 Toàn Vũ Trụ`,
            stage3Title: "Giai Đoạn 3: Hợp Nhất Vũ Trụ",
            stage3Description: "Biên giới cuối cùng của sự sáng tạo. Ý chí của bạn trở thành hiện thực!",
            theBoundlessVoidTitle: "Hư Không Vô Tận",
            currentTheBoundlessVoidLabel: "Hư Không Vô Tận Hiện Tại",
            theBoundlessVoidPerSecondLabel: "Hư Không Vô Tận mỗi giây",
            buyTheBoundlessVoidBtnText: (cost) => `Chuyển đổi ${cost} Toàn Vũ Trụ thành 1 Hư Không Vô Tận`,
            cosmicFabricTitle: "Vải Vũ Trụ",
            currentCosmicFabricLabel: "Vải Vũ Trụ Hiện Tại",
            cosmicFabricPerSecondLabel: "Vải Vũ Trụ mỗi giây",
            buyCosmicFabricBtnText: (cost) => `Chuyển đổi ${cost} Hư Không Vô Tận thành 1 Vải Vũ Trụ`,
            infiniteNexusTitle: "Điểm Nút Vô Hạn",
            currentInfiniteNexusLabel: "Điểm Nút Vô Hạn Hiện Tại",
            infiniteNexusPerSecondLabel: "Điểm Nút Vô Hạn mỗi giây",
            buyInfiniteNexusBtnText: (cost) => `Chuyển đổi ${cost} Vải Vũ Trụ thành 1 Điểm Nút Vô Hạn`,
            eternalEchoTitle: "Tiếng Vọng Vĩnh Hằng",
            currentEternalEchoLabel: "Tiếng Vọng Vĩnh Hằng Hiện Tại",
            eternalEchoPerSecondLabel: "Tiếng Vọng Vĩnh Hằng mỗi giây",
            buyEternalEchoBtnText: (cost) => `Chuyển đổi ${cost} Điểm Nút Vô Hạn thành 1 Tiếng Vọng Vĩnh Hằng`,
            zenithOfCreationTitle: "Đỉnh Cao Sáng Tạo",
            currentZenithOfCreationLabel: "Đỉnh Cao Sáng Tạo Hiện Tại",
            zenithOfCreationPerSecondLabel: "Đỉnh Cao Sáng Tạo mỗi giây",
            buyZenithOfCreationBtnText: (cost) => `Chuyển đổi ${cost} Tiếng Vọng Vĩnh Hằng thành 1 Đỉnh Cao Sáng Tạo`,
            stage4Title: "Giai Đoạn 4: Thức Tỉnh Vũ Trụ",
            stage4Description: "Giải mã những bí mật cuối cùng của sự tồn tại!",
            universalSingularityTitle: "Điểm Kỳ Dị Vũ Trụ",
            currentUniversalSingularityLabel: "Điểm Kỳ Dị Vũ Trụ Hiện Tại",
            universalSingularityPerSecondLabel: "Điểm Kỳ Dị Vũ Trụ mỗi giây",
            buyUniversalSingularityBtnText: (cost) => `Chuyển đổi ${cost} Đỉnh Cao Sáng Tạo thành 1 Điểm Kỳ Dị Vũ Trụ`,
            existentialFabricTitle: "Vải Tồn Tại",
            currentExistentialFabricLabel: "Vải Tồn Tại Hiện Tại",
            existentialFabricPerSecondLabel: "Vải Tồn Tại mỗi giây",
            buyExistentialFabricBtnText: (cost) => `Chuyển đổi ${cost} Điểm Kỳ Dị Vũ Trụ thành 1 Vải Tồn Tại`,
            temporalFluxTitle: "Dòng Chảy Thời Gian",
            currentTemporalFluxLabel: "Dòng Chảy Thời Gian Hiện Tại",
            temporalFluxPerSecondLabel: "Dòng Chảy Thời Gian mỗi giây",
            buyTemporalFluxBtnText: (cost) => `Chuyển đổi ${cost} Vải Tồn Tại thành 1 Dòng Chảy Thời Gian`,
            multidimensionalHarmonyTitle: "Hòa Hợp Đa Chiều",
            currentMultidimensionalHarmonyLabel: "Hòa Hợp Đa Chiều Hiện Tại",
            multidimensionalHarmonyPerSecondLabel: "Hòa Hợp Đa Chiều mỗi giây",
            buyMultidimensionalHarmonyBtnText: (cost) => `Chuyển đổi ${cost} Dòng Chảy Thời Gian thành 1 Hòa Hợp Đa Chiều`,
            cosmicAwakeningTitle: "Thức Tỉnh Vũ Trụ",
            currentCosmicAwakeningLabel: "Thức Tỉnh Vũ Trụ Hiện Tại",
            cosmicAwakeningPerSecondLabel: "Thức Tỉnh Vũ Trụ mỗi giây",
            buyCosmicAwakeningBtnText: (cost) => `Chuyển đổi ${cost} Hòa Hợp Đa Chiều thành 1 Thức Tỉnh Vũ Trụ`,
            divineSparkTitle: "Tia Lửa Thần Thánh",
            currentDivineSparkLabel: "Tia Lửa Thần Thánh Hiện Tại",
            divineSparkPerSecondLabel: "Tia Lửa Thần Thánh mỗi giây",
            buyDivineSparkBtnText: (cost) => `Chuyển đổi ${cost} Thức Tỉnh Vũ Trụ thành 1 Tia Lửa Thần Thánh`,
            stage5Title: "Giai Đoạn 5: Khởi Nguyên Vũ Trụ",
            stage5Description: "Bạn đang dệt nên cấu trúc của vũ trụ!",
            cosmicDustTitle: "Bụi Vũ Trụ",
            currentCosmicDustLabel: "Bụi Vũ Trụ Hiện Tại",
            cosmicDustPerSecondLabel: "Bụi Vũ Trụ mỗi giây",
            buyCosmicDustBtnText: (cost) => `Chuyển đổi ${cost} Tia Lửa Thần Thánh thành 1 Bụi Vũ Trụ`,
            stellarNucleusTitle: "Hạt Nhân Sao",
            currentStellarNucleusLabel: "Hạt Nhân Sao Hiện Tại",
            stellarNucleusPerSecondLabel: "Hạt Nhân Sao mỗi giây",
            buyStellarNucleusBtnText: (cost) => `Chuyển đổi ${cost} Bụi Vũ Trụ thành 1 Hạt Nhân Sao`,
            galacticCoreTitle: "Lõi Thiên Hà",
            currentGalacticCoreLabel: "Lõi Thiên Hà Hiện Tại",
            galacticCorePerSecondLabel: "Lõi Thiên Hà mỗi giây",
            buyGalacticCoreBtnText: (cost) => `Chuyển đổi ${cost} Hạt Nhân Sao thành 1 Lõi Thiên Hà`,
            stage6Title: "Giai Đoạn 6: Dệt Đa Chiều",
            stage6Description: "Bạn đang thao túng cấu trúc thực tại qua các chiều không gian!",
            quantumEntanglementTitle: "Vướng Víu Lượng Tử",
            currentQuantumEntanglementLabel: "Vướng Víu Lượng Tử Hiện Tại",
            quantumEntanglementPerSecondLabel: "Vướng Víu Lượng Tử mỗi giây",
            buyQuantumEntanglementBtnText: (cost) => `Chuyển đổi ${cost} Lõi Thiên Hà thành 1 Vướng Víu Lượng Tử`,
            dimensionalRiftTitle: "Khe Nứt Chiều Không Gian",
            currentDimensionalRiftLabel: "Khe Nứt Chiều Không Gian Hiện Tại",
            dimensionalRiftPerSecondLabel: "Khe Nứt Chiều Không Gian mỗi giây",
            buyDimensionalRiftBtnText: (cost) => `Chuyển đổi ${cost} Vướng Víu Lượng Tử thành 1 Khe Nứt Chiều Không Gian`,
            realityAnchorTitle: "Mỏ Neo Thực Tại",
            currentRealityAnchorLabel: "Mỏ Neo Thực Tại Hiện Tại",
            realityAnchorPerSecondLabel: "Mỏ Neo Thực Tại mỗi giây",
            buyRealityAnchorBtnText: (cost) => `Chuyển đổi ${cost} Khe Nứt Chiều Không Gian thành 1 Mỏ Neo Thực Tại`,
            stage7Title: "Giai Đoạn 7: Quyền Năng Tuyệt Đối",
            stage7Description: "Bạn đang trở thành quyền năng tối thượng, định đoạt sự tồn tại!",
            omniEnergyTitle: "Năng Lượng Toàn Năng",
            currentOmniEnergyLabel: "Năng Lượng Toàn Năng Hiện Tại",
            omniEnergyPerSecondLabel: "Năng Lượng Toàn Năng mỗi giây",
            buyOmniEnergyBtnText: (cost) => `Chuyển đổi ${cost} Mỏ Neo Thực Tại thành 1 Năng Lượng Toàn Năng`,
            primeMoverTitle: "Động Lực Đầu Tiên",
            currentPrimeMoverLabel: "Động Lực Đầu Tiên Hiện Tại",
            primeMoverPerSecondLabel: "Động Lực Đầu Tiên mỗi giây",
            buyPrimeMoverBtnText: (cost) => `Chuyển đổi ${cost} Năng Lượng Toàn Năng thành 1 Động Lực Đầu Tiên`,
            trueCreatorTitle: "Đấng Sáng Tạo Thực Sự",
            currentTrueCreatorLabel: "Đấng Sáng Tạo Thực Sự Hiện Tại",
            trueCreatorPerSecondLabel: "Đấng Sáng Tạo Thực Sự mỗi giây",
            buyTrueCreatorBtnText: (cost) => `Chuyển đổi ${cost} Động Lực Đầu Tiên thành 1 Đấng Sáng Tạo Thực Sự`,
            stage8Title: "Giai Đoạn 8: Vượt Qua Vô Cực",
            stage8Description: "Bạn đã vượt qua mọi giới hạn. Trò chơi sắp đến hồi kết thúc cuối cùng!",
            cosmicSingularityTitle: "Điểm Kỳ Dị Vũ Trụ",
            currentCosmicSingularityLabel: "Điểm Kỳ Dị Vũ Trụ Hiện Tại",
            cosmicSingularityPerSecondLabel: "Điểm Kỳ Dị Vũ Trụ mỗi giây",
            buyCosmicSingularityBtnText: (cost) => `Chuyển đổi ${cost} Đấng Sáng Tạo Thực Sự thành 1 Điểm Kỳ Dị Vũ Trụ`,
            existentialTruthTitle: "Chân Lý Tồn Tại",
            currentExistentialTruthLabel: "Chân Lý Tồn Tại Hiện Tại",
            existentialTruthPerSecondLabel: "Chân Lý Tồn Tại mỗi giây",
            buyExistentialTruthBtnText: (cost) => `Chuyển đổi ${cost} Điểm Kỳ Dị Vũ Trụ thành 1 Chân Lý Tồn Tại`,
            theUltimateFormTitle: "Hình Thức Tối Thượng",
            currentTheUltimateFormLabel: "Hình Thức Tối Thượng Hiện Tại",
            theUltimateFormPerSecondLabel: "Hình Thức Tối Thượng mỗi giây",
            buyTheUltimateFormBtnText: (cost) => `Chuyển đổi ${cost} Chân Lý Tồn Tại thành 1 Hình Thức Tối Thượng`,
            stage9Title: "Giai Đoạn 9: Vượt Qua Bức Màn",
            stage9Description: "Bạn đang chạm vào bản chất cốt lõi của sự sáng tạo!",
            cosmicNexusTitle: "Điểm Nút Vũ Trụ",
            currentCosmicNexusLabel: "Điểm Nút Vũ Trụ Hiện Tại",
            cosmicNexusPerSecondLabel: "Điểm Nút Vũ Trụ mỗi giây",
            buyCosmicNexusBtnText: (cost) => `Chuyển đổi ${cost} Hình Thức Tối Thượng thành 1 Điểm Nút Vũ Trụ`,
            quantumSingularityTitle: "Điểm Kỳ Dị Lượng Tử",
            currentQuantumSingularityLabel: "Điểm Kỳ Dị Lượng Tử Hiện Tại",
            quantumSingularityPerSecondLabel: "Điểm Kỳ Dị Lượng Tử mỗi giây",
            buyQuantumSingularityBtnText: (cost) => `Chuyển đổi ${cost} Điểm Nút Vũ Trụ thành 1 Điểm Kỳ Dị Lượng Tử`,
            transcendentEssenceTitle: "Tinh Hoa Siêu Việt",
            currentTranscendentEssenceLabel: "Tinh Hoa Siêu Việt Hiện Tại",
            transcendentEssencePerSecondLabel: "Tinh Hoa Siêu Việt mỗi giây",
            buyTranscendentEssenceBtnText: (cost) => `Chuyển đổi ${cost} Điểm Kỳ Dị Lượng Tử thành 1 Tinh Hoa Siêu Việt`,
            generateLoreBtnText: "Tạo Lore",
            loreGenerating: "Đang tạo lore...",
            loreApiError: (status, statusText, errorData) => `Lỗi API: ${status} ${statusText} - ${JSON.stringify(errorData)}`,
            loreResponseError: "Không thể tạo lore. Cấu trúc phản hồi không mong muốn.",
            loreGenericError: "Lỗi khi tạo lore. Vui lòng thử lại. (Kiểm tra console để biết chi tiết)",
            gameSaved: "Tiến độ trò chơi đã được lưu!",
            gameLoadSuccess: "Tiến độ trò chơi đã được tải!",
            gameLoadNoData: "Không tìm thấy dữ liệu lưu trò chơi nào.",
            gameLoadError: "Không thể tải trò chơi. Dữ liệu lưu có thể bị hỏng.",
            cheatActivated: "ĐÃ KÍCH HOẠT MÃ CHEAT! +10,000 Gỗ!",
            quizCorrect: (reward) => `Chính xác! Bạn đã nhận được ${reward} Gỗ.`,
            quizIncorrect: (answer) => `Không đúng. Đáp án là "${answer}".`,
            quizNoMoreQuestions: "Không còn câu hỏi nào!",
            starClickedNotification: (resourceName) => `Bạn đã nhấp vào ngôi sao! Bạn được cộng thêm chút ${resourceName} mỗi giây`,
            ttsEnabled: "Chuyển văn bản thành giọng nói đã bật.",
            ttsDisabled: "Chuyển văn bản thành giọng nói đã tắt.",
            discordInviteText: "Tham gia máy chủ Discord của chúng tôi",
            timeToNextResourceLabel: "Thời gian đến tài nguyên tiếp theo",
            timeToNextResourceValue: (time) => `Tài nguyên tiếp theo trong: ${time}`,
            timeToNextResourceNone: "Đã thu thập tất cả tài nguyên!"
        }
    };

    // DOM Elements: References to all interactive and display elements
    const gameTitleElement = document.getElementById('gameTitle');
    const gameStatsTitleElement = document.getElementById('gameStatsTitle');
    const timePlayedLabel = document.getElementById('timePlayedLabel');
    const saveGameBtn = document.getElementById('saveGameBtn');
    const loadGameBtn = document.getElementById('loadGameBtn');

    const languageSectionTitle = document.getElementById('languageSectionTitle');
    const currentLanguageLabel = document.getElementById('currentLanguageLabel');
    const currentLanguageDisplay = document.getElementById('currentLanguageDisplay');
    const languageToggleBtn = document.getElementById('languageToggleBtn');

    const ttsTitleElement = document.getElementById('ttsTitle');
    const ttsStatusLabel = document.getElementById('ttsStatusLabel');
    const ttsStatusSpan = document.getElementById('ttsStatus');
    const ttsToggleBtn = document.getElementById('ttsToggleBtn');

    const quizTitleElement = document.getElementById('quizTitle');
    const quizQuestionParagraph = document.getElementById('quizQuestion');
    const quizAnswerInput = document.getElementById('quizAnswerInput');
    const submitQuizAnswerButton = document.getElementById('submitQuizAnswer');
    const quizFeedbackParagraph = document.getElementById('quizFeedback');

    const stage1Title = document.getElementById('stage1Title');
    const stage1Description = document.getElementById('stage1Description');

    const woodTitle = document.getElementById('woodTitle');
    const woodCountSpan = document.getElementById('woodCount');
    const currentWoodLabel = document.getElementById('currentWoodLabel');
    const woodPerSecondLabel = document.getElementById('woodPerSecondLabel');
    const woodPerSecondSpan = document.getElementById('woodPerSecond');
    const addWoodButton = document.getElementById('addWood');
    const chopWoodBtnText = document.getElementById('chopWoodBtnText');
    const chopPowerDisplay = document.getElementById('chopPowerDisplay');
    const upgradeChopPowerButton = document.getElementById('upgradeChopPower');
    const upgradeChopPowerBtnText = document.getElementById('upgradeChopPowerBtnText');
    const chopUpgradeCostLabel = document.getElementById('chopUpgradeCostLabel');
    const chopUpgradeCostSpan = document.getElementById('chopUpgradeCost');
    const woodCostUnit = document.getElementById('woodCostUnit');
    const buyWoodPerSecondButton = document.getElementById('buyWoodPerSecond');
    const automateWoodBtnText = document.getElementById('automateWoodBtnText');
    const woodAutoUnit = document.getElementById('woodAutoUnit');
    const woodAutomationCostLabel = document.getElementById('woodAutomationCostLabel');
    const woodPerSecondCostSpan = document.getElementById('woodPerSecondCost');
    const woodAutoCostUnit = document.getElementById('woodAutoCostUnit');

    const criticalHitFeedbackDiv = document.getElementById('criticalHitFeedback');
    const criticalHitTextSpan = document.getElementById('criticalHitText');
    const closeCriticalFeedbackButton = document.getElementById('closeCriticalFeedback');

    const loreButtons = document.querySelectorAll('.generate-lore-btn');
    const loreDisplays = {
        "Gỗ": document.getElementById('woodLore'),
        "Đá": document.getElementById('stoneLore'),
        "Sắt": document.getElementById('ironLore'),
        "Hợp Kim": document.getElementById('alloyLore'),
        "Mạch Điện": document.getElementById('circuitryLore'),
        "Lõi AI": document.getElementById('aiCoreLore'),
        "Ý Thức": document.getElementById('consciousnessLore'),
        "Mảnh Vỡ Thực Tại": document.getElementById('realityShardLore'),
        "Nghịch Lý": document.getElementById('paradoxLore'),
        "Điểm Kỳ Dị": document.getElementById('singularityLore'),
        "Đa Vũ Trụ": document.getElementById('multiverseLore'),
        "Toàn Tri": document.getElementById('omniscienceLore'),
        "Sáng Thế": document.getElementById('genesisLore'),
        "Hư Không": document.getElementById('voidLore'),
        "Vạn Vật Toàn Thể": document.getElementById('theAllLore'),
        "Siêu Việt": document.getElementById('transcendenceLore'),
        "Tuyệt Đối": document.getElementById('theAbsoluteLore'),
        "Điểm Kết Thúc": document.getElementById('theEndLore'),
        "Khởi Nguyên Mới": document.getElementById('theNewBeginningLore'),
        "Ý Chí Kiến Trúc Sư": document.getElementById('theArchitectsWillLore'),
        "The Omniverse": document.getElementById('theOmniverseLore'),
        "The Boundless Void": document.getElementById('theBoundlessVoidLore'),
        "Cosmic Fabric": document.getElementById('cosmicFabricLore'),
        "Infinite Nexus": document.getElementById('infiniteNexusLore'),
        "Eternal Echo": document.getElementById('eternalEchoLore'),
        "Zenith of Creation": document.getElementById('zenithOfCreationLore'),
        "Universal Singularity": document.getElementById('universalSingularityLore'),
        "Existential Fabric": document.getElementById('existentialFabricLore'),
        "Temporal Flux": document.getElementById('temporalFluxLore'),
        "Multidimensional Harmony": document.getElementById('multidimensionalHarmonyLore'),
        "Cosmic Awakening": document.getElementById('cosmicAwakeningLore'),
        "Divine Spark": document.getElementById('divineSparkLore'),
        "Cosmic Dust": document.getElementById('cosmicDustLore'),
        "Stellar Nucleus": document.getElementById('stellarNucleusLore'),
        "Galactic Core": document.getElementById('galacticCoreLore'),
        "Quantum Entanglement": document.getElementById('quantumEntanglementLore'),
        "Dimensional Rift": document.getElementById('dimensionalRiftLore'),
        "Reality Anchor": document.getElementById('realityAnchorLore'),
        "Omni-Energy": document.getElementById('omniEnergyLore'),
        "Prime Mover": document.getElementById('primeMoverLore'),
        "True Creator": document.getElementById('trueCreatorLore'),
        "Cosmic Singularity": document.getElementById('cosmicSingularityLore'),
        "Existential Truth": document.getElementById('existentialTruthLore'),
        "The Ultimate Form": document.getElementById('theUltimateFormLore'),
        "Cosmic Nexus": document.getElementById('cosmicNexusLore'),
        "Quantum Singularity": document.getElementById('quantumSingularityLore'),
        "Transcendent Essence": document.getElementById('transcendentEssenceLore')
    };

    const discordInviteText = document.getElementById('discordInviteText');

    // Resource-specific DOM elements (simplified for brevity, similar pattern for all)
    const stoneTitle = document.getElementById('stoneTitle');
    const currentStoneLabel = document.getElementById('currentStoneLabel');
    const stonePerSecondLabel = document.getElementById('stonePerSecondLabel');
    const stoneCountSpan = document.getElementById('stoneCount');
    const stonePerSecondSpan = document.getElementById('stonePerSecond');
    const buyStoneButton = document.getElementById('buyStone');
    const buyStoneBtnText = document.getElementById('buyStoneBtnText');
    const generateLoreBtnTextStone = document.getElementById('generateLoreBtnTextStone');

    const ironTitle = document.getElementById('ironTitle');
    const currentIronLabel = document.getElementById('currentIronLabel');
    const ironPerSecondLabel = document.getElementById('ironPerSecondLabel');
    const ironCountSpan = document.getElementById('ironCount');
    const ironPerSecondSpan = document.getElementById('ironPerSecond');
    const buyIronButton = document.getElementById('buyIron');
    const buyIronBtnText = document.getElementById('buyIronBtnText');
    const generateLoreBtnTextIron = document.getElementById('generateLoreBtnTextIron');

    const alloyTitle = document.getElementById('alloyTitle');
    const currentAlloyLabel = document.getElementById('currentAlloyLabel');
    const alloyPerSecondLabel = document.getElementById('alloyPerSecondLabel');
    const alloyCountSpan = document.getElementById('alloyCount');
    const alloyPerSecondSpan = document.getElementById('alloyPerSecond');
    const buyAlloyButton = document.getElementById('buyAlloy');
    const buyAlloyBtnText = document.getElementById('buyAlloyBtnText');
    const generateLoreBtnTextAlloy = document.getElementById('generateLoreBtnTextAlloy');

    const circuitryTitle = document.getElementById('circuitryTitle');
    const currentCircuitryLabel = document = document.getElementById('currentCircuitryLabel');
    const circuitryPerSecondLabel = document.getElementById('circuitryPerSecondLabel');
    const circuitryCountSpan = document.getElementById('circuitryCount');
    const circuitryPerSecondSpan = document.getElementById('circuitryPerSecond');
    const buyCircuitryButton = document.getElementById('buyCircuitry');
    const buyCircuitryBtnText = document.getElementById('buyCircuitryBtnText');
    const generateLoreBtnTextCircuitry = document.getElementById('generateLoreBtnTextCircuitry');

    const aiCoreTitle = document.getElementById('aiCoreTitle');
    const currentAICoreLabel = document.getElementById('currentAICoreLabel');
    const aiCorePerSecondLabel = document.getElementById('aiCorePerSecondLabel');
    const aiCoreCountSpan = document.getElementById('aiCoreCount');
    const aiCorePerSecondSpan = document.getElementById('aiCorePerSecond');
    const buyAICoreButton = document.getElementById('buyAICore');
    const buyAICoreBtnText = document.getElementById('buyAICoreBtnText');
    const generateLoreBtnTextAICore = document.getElementById('generateLoreBtnTextAICore');

    const consciousnessTitle = document.getElementById('consciousnessTitle');
    const currentConsciousnessLabel = document.getElementById('currentConsciousnessLabel');
    const consciousnessPerSecondLabel = document.getElementById('consciousnessPerSecondLabel');
    const consciousnessCountSpan = document.getElementById('consciousnessCount');
    const consciousnessPerSecondSpan = document.getElementById('consciousnessPerSecond');
    const buyConsciousnessButton = document.getElementById('buyConsciousness');
    const buyConsciousnessBtnText = document.getElementById('buyConsciousnessBtnText');
    const generateLoreBtnTextConsciousness = document.getElementById('generateLoreBtnTextConsciousness');

    const realityShardTitle = document.getElementById('realityShardTitle');
    const currentRealityShardLabel = document.getElementById('currentRealityShardLabel');
    const realityShardPerSecondLabel = document.getElementById('realityShardPerSecondLabel');
    const realityShardCountSpan = document.getElementById('realityShardCount');
    const realityShardPerSecondSpan = document.getElementById('realityShardPerSecond');
    const buyRealityShardButton = document.getElementById('buyRealityShard');
    const buyRealityShardBtnText = document.getElementById('buyRealityShardBtnText');
    const generateLoreBtnTextRealityShard = document.getElementById('generateLoreBtnTextRealityShard');

    const paradoxTitle = document.getElementById('paradoxTitle');
    const currentParadoxLabel = document.getElementById('currentParadoxLabel');
    const paradoxPerSecondLabel = document.getElementById('paradoxPerSecondLabel');
    const paradoxCountSpan = document.getElementById('paradoxCount');
    const paradoxPerSecondSpan = document.getElementById('paradoxPerSecond');
    const buyParadoxButton = document.getElementById('buyParadox');
    const buyParadoxBtnText = document.getElementById('buyParadoxBtnText');
    const generateLoreBtnTextParadox = document.getElementById('generateLoreBtnTextParadox');

    const singularityTitle = document.getElementById('singularityTitle');
    const currentSingularityLabel = document.getElementById('currentSingularityLabel');
    const singularityPerSecondLabel = document.getElementById('singularityPerSecondLabel');
    const singularityCountSpan = document.getElementById('singularityCount');
    const singularityPerSecondSpan = document.getElementById('singularityPerSecond');
    const buySingularityButton = document.getElementById('buySingularity');
    const buySingularityBtnText = document.getElementById('buySingularityBtnText');
    const generateLoreBtnTextSingularity = document.getElementById('generateLoreBtnTextSingularity');

    const multiverseTitle = document.getElementById('multiverseTitle');
    const currentMultiverseLabel = document.getElementById('currentMultiverseLabel');
    const multiversePerSecondLabel = document.getElementById('multiversePerSecondLabel');
    const multiverseCountSpan = document.getElementById('multiverseCount');
    const multiversePerSecondSpan = document.getElementById('multiversePerSecond');
    const buyMultiverseButton = document.getElementById('buyMultiverse');
    const buyMultiverseBtnText = document.getElementById('buyMultiverseBtnText');
    const generateLoreBtnTextMultiverse = document.getElementById('generateLoreBtnTextMultiverse');

    const omniscienceTitle = document.getElementById('omniscienceTitle');
    const currentOmniscienceLabel = document.getElementById('currentOmniscienceLabel');
    const omnisciencePerSecondLabel = document.getElementById('omnisciencePerSecondLabel');
    const omniscienceCountSpan = document.getElementById('omniscienceCount');
    const omnisciencePerSecondSpan = document.getElementById('omnisciencePerSecond');
    const buyOmniscienceButton = document.getElementById('buyOmniscience');
    const buyOmniscienceBtnText = document.getElementById('buyOmniscienceBtnText');
    const generateLoreBtnTextOmniscience = document.getElementById('generateLoreBtnTextOmniscience');

    const genesisTitle = document.getElementById('genesisTitle');
    const currentGenesisLabel = document.getElementById('currentGenesisLabel');
    const genesisPerSecondLabel = document = document.getElementById('genesisPerSecondLabel');
    const genesisCountSpan = document.getElementById('genesisCount');
    const genesisPerSecondSpan = document.getElementById('genesisPerSecond');
    const buyGenesisButton = document.getElementById('buyGenesis');
    const buyGenesisBtnText = document.getElementById('buyGenesisBtnText');
    const generateLoreBtnTextGenesis = document.getElementById('generateLoreBtnTextGenesis');

    const voidTitle = document.getElementById('voidTitle');
    const currentVoidLabel = document.getElementById('currentVoidLabel');
    const voidPerSecondLabel = document.getElementById('voidPerSecondLabel');
    const voidCountSpan = document.getElementById('voidCount');
    const voidPerSecondSpan = document.getElementById('voidPerSecond');
    const buyVoidButton = document.getElementById('buyVoid');
    const buyVoidBtnText = document.getElementById('buyVoidBtnText');
    const generateLoreBtnTextVoid = document.getElementById('generateLoreBtnTextVoid');

    const stage2Title = document.getElementById('stage2Title');
    const stage2Description = document.getElementById('stage2Description');

    const theAllTitle = document.getElementById('theAllTitle');
    const currentTheAllLabel = document.getElementById('currentTheAllLabel');
    const theAllPerSecondLabel = document.getElementById('theAllPerSecondLabel');
    const theAllCountSpan = document.getElementById('theAllCount');
    const theAllPerSecondSpan = document.getElementById('theAllPerSecond');
    const buyTheAllButton = document.getElementById('buyTheAll');
    const buyTheAllBtnText = document.getElementById('buyTheAllBtnText');
    const theAllCost = document.getElementById('theAllCost');
    const generateLoreBtnTextTheAll = document.getElementById('generateLoreBtnTextTheAll');

    const transcendenceTitle = document.getElementById('transcendenceTitle');
    const currentTranscendenceLabel = document.getElementById('currentTranscendenceLabel');
    const transcendencePerSecondLabel = document.getElementById('transcendencePerSecondLabel');
    const transcendenceCountSpan = document.getElementById('transcendenceCount');
    const transcendencePerSecondSpan = document.getElementById('transcendencePerSecond');
    const buyTranscendenceButton = document.getElementById('buyTranscendence');
    const buyTranscendenceBtnText = document.getElementById('buyTranscendenceBtnText');
    const transcendenceCost = document.getElementById('transcendenceCost');
    const generateLoreBtnTextTranscendence = document.getElementById('generateLoreBtnTextTranscendence');

    const theAbsoluteTitle = document.getElementById('theAbsoluteTitle');
    const currentTheAbsoluteLabel = document.getElementById('currentTheAbsoluteLabel');
    const theAbsolutePerSecondLabel = document.getElementById('theAbsolutePerSecondLabel');
    const theAbsoluteCountSpan = document.getElementById('theAbsoluteCount');
    const theAbsolutePerSecondSpan = document.getElementById('theAbsolutePerSecond');
    const buyTheAbsoluteButton = document.getElementById('buyTheAbsolute');
    const buyTheAbsoluteBtnText = document.getElementById('buyTheAbsoluteBtnText');
    const theAbsoluteCost = document.getElementById('theAbsoluteCost');
    const generateLoreBtnTextTheAbsolute = document.getElementById('generateLoreBtnTextTheAbsolute');

    const theEndTitle = document.getElementById('theEndTitle');
    const currentTheEndLabel = document.getElementById('currentTheEndLabel');
    const theEndPerSecondLabel = document.getElementById('theEndPerSecondLabel');
    const theEndCountSpan = document.getElementById('theEndCount');
    const theEndPerSecondSpan = document.getElementById('theEndPerSecond');
    const buyTheEndButton = document.getElementById('buyTheEnd');
    const buyTheEndBtnText = document.getElementById('buyTheEndBtnText');
    const theEndCost = document.getElementById('theEndCost');
    const generateLoreBtnTextTheEnd = document.getElementById('generateLoreBtnTextTheEnd');

    const theNewBeginningTitle = document.getElementById('theNewBeginningTitle');
    const currentTheNewBeginningLabel = document.getElementById('currentTheNewBeginningLabel');
    const theNewBeginningPerSecondLabel = document.getElementById('theNewBeginningPerSecondLabel');
    const theNewBeginningCountSpan = document.getElementById('theNewBeginningCount');
    const theNewBeginningPerSecondSpan = document.getElementById('theNewBeginningPerSecond');
    const buyTheNewBeginningButton = document.getElementById('buyTheNewBeginning');
    const buyTheNewBeginningBtnText = document.getElementById('buyTheNewBeginningBtnText');
    const theNewBeginningCostSpan = document.getElementById('theNewBeginningCost');
    const generateLoreBtnTextTheNewBeginning = document.getElementById('generateLoreBtnTextTheNewBeginning');

    const theArchitectsWillTitle = document.getElementById('theArchitectsWillTitle');
    const currentTheArchitectsWillLabel = document.getElementById('currentTheArchitectsWillLabel');
    const theArchitectsWillPerSecondLabel = document.getElementById('theArchitectsWillPerSecondLabel');
    const theArchitectsWillCountSpan = document.getElementById('theArchitectsWillCount');
    const theArchitectsWillPerSecondSpan = document.getElementById('theArchitectsWillPerSecond');
    const buyTheArchitectsWillButton = document.getElementById('buyTheArchitectsWill');
    const buyTheArchitectsWillBtnText = document.getElementById('buyTheArchitectsWillBtnText');
    const theArchitectsWillCostSpan = document.getElementById('theArchitectsWillCost');
    const generateLoreBtnTextTheArchitectsWill = document.getElementById('generateLoreBtnTextTheArchitectsWill');

    const theOmniverseTitle = document.getElementById('theOmniverseTitle');
    const currentTheOmniverseLabel = document.getElementById('currentTheOmniverseLabel');
    const theOmniversePerSecondLabel = document.getElementById('theOmniversePerSecondLabel');
    const theOmniverseCountSpan = document.getElementById('theOmniverseCount');
    const theOmniversePerSecondSpan = document.getElementById('theOmniversePerSecond');
    const buyTheOmniverseButton = document.getElementById('buyTheOmniverse');
    const buyTheOmniverseBtnText = document.getElementById('buyTheOmniverseBtnText');
    const theOmniverseCost = document.getElementById('theOmniverseCost');
    const generateLoreBtnTextTheOmniverse = document.getElementById('generateLoreBtnTextTheOmniverse');

    const stage3Title = document.getElementById('stage3Title');
    const stage3Description = document.getElementById('stage3Description');

    const theBoundlessVoidTitle = document.getElementById('theBoundlessVoidTitle');
    const currentTheBoundlessVoidLabel = document.getElementById('currentTheBoundlessVoidLabel');
    const theBoundlessVoidPerSecondLabel = document.getElementById('theBoundlessVoidPerSecondLabel');
    const theBoundlessVoidCountSpan = document.getElementById('theBoundlessVoidCount');
    const theBoundlessVoidPerSecondSpan = document.getElementById('theBoundlessVoidPerSecond');
    const buyTheBoundlessVoidButton = document.getElementById('buyTheBoundlessVoid');
    const buyTheBoundlessVoidBtnText = document.getElementById('buyTheBoundlessVoidBtnText');
    const theBoundlessVoidCost = document.getElementById('theBoundlessVoidCost');
    const generateLoreBtnTextTheBoundlessVoid = document.getElementById('generateLoreBtnTextTheBoundlessVoid');

    const cosmicFabricTitle = document.getElementById('cosmicFabricTitle');
    const currentCosmicFabricLabel = document.getElementById('currentCosmicFabricLabel');
    const cosmicFabricPerSecondLabel = document.getElementById('cosmicFabricPerSecondLabel');
    const cosmicFabricCountSpan = document.getElementById('cosmicFabricCount');
    const cosmicFabricPerSecondSpan = document.getElementById('cosmicFabricPerSecond');
    const buyCosmicFabricButton = document.getElementById('buyCosmicFabric');
    const buyCosmicFabricBtnText = document.getElementById('buyCosmicFabricBtnText');
    const cosmicFabricCost = document.getElementById('cosmicFabricCost');
    const generateLoreBtnTextCosmicFabric = document.getElementById('generateLoreBtnTextCosmicFabric');

    const infiniteNexusTitle = document.getElementById('infiniteNexusTitle');
    const currentInfiniteNexusLabel = document.getElementById('currentInfiniteNexusLabel');
    const infiniteNexusPerSecondLabel = document.getElementById('infiniteNexusPerSecondLabel');
    const infiniteNexusCountSpan = document.getElementById('infiniteNexusCount');
    const infiniteNexusPerSecondSpan = document.getElementById('infiniteNexusPerSecond');
    const buyInfiniteNexusButton = document.getElementById('buyInfiniteNexus');
    const buyInfiniteNexusBtnText = document.getElementById('buyInfiniteNexusBtnText');
    const infiniteNexusCost = document.getElementById('infiniteNexusCost');
    const generateLoreBtnTextInfiniteNexus = document.getElementById('generateLoreBtnTextInfiniteNexus');

    const eternalEchoTitle = document.getElementById('eternalEchoTitle');
    const currentEternalEchoLabel = document.getElementById('currentEternalEchoLabel');
    const eternalEchoPerSecondLabel = document.getElementById('eternalEchoPerSecondLabel');
    const eternalEchoCountSpan = document.getElementById('eternalEchoCount');
    const eternalEchoPerSecondSpan = document.getElementById('eternalEchoPerSecond');
    const buyEternalEchoButton = document.getElementById('buyEternalEcho');
    const buyEternalEchoBtnText = document.getElementById('buyEternalEchoBtnText');
    const eternalEchoCost = document.getElementById('eternalEchoCost');
    const generateLoreBtnTextEternalEcho = document.getElementById('generateLoreBtnTextEternalEcho');

    const zenithOfCreationTitle = document.getElementById('zenithOfCreationTitle');
    const currentZenithOfCreationLabel = document.getElementById('currentZenithOfCreationLabel');
    const zenithOfCreationPerSecondLabel = document.getElementById('zenithOfCreationPerSecondLabel');
    const zenithOfCreationCountSpan = document.getElementById('zenithOfCreationCount');
    const zenithOfCreationPerSecondSpan = document.getElementById('zenithOfCreationPerSecond');
    const buyZenithOfCreationButton = document.getElementById('buyZenithOfCreation');
    const buyZenithOfCreationBtnText = document.getElementById('buyZenithOfCreationBtnText');
    const zenithOfCreationCost = document.getElementById('zenithOfCreationCost');
    const generateLoreBtnTextZenithOfCreation = document.getElementById('generateLoreBtnTextZenithOfCreation');

    const stage4Title = document.getElementById('stage4Title');
    const stage4Description = document.getElementById('stage4Description');

    const universalSingularityTitle = document.getElementById('universalSingularityTitle');
    const currentUniversalSingularityLabel = document.getElementById('currentUniversalSingularityLabel');
    const universalSingularityPerSecondLabel = document.getElementById('universalSingularityPerSecondLabel');
    const universalSingularityCountSpan = document.getElementById('universalSingularityCount');
    const universalSingularityPerSecondSpan = document.getElementById('universalSingularityPerSecond');
    const buyUniversalSingularityButton = document.getElementById('buyUniversalSingularity');
    const buyUniversalSingularityBtnText = document.getElementById('buyUniversalSingularityBtnText');
    const universalSingularityCost = document.getElementById('universalSingularityCost');
    const generateLoreBtnTextUniversalSingularity = document.getElementById('generateLoreBtnTextUniversalSingularity');

    const existentialFabricTitle = document.getElementById('existentialFabricTitle');
    const currentExistentialFabricLabel = document.getElementById('currentExistentialFabricLabel');
    const existentialFabricPerSecondLabel = document.getElementById('existentialFabricPerSecondLabel');
    const existentialFabricCountSpan = document.getElementById('existentialFabricCount');
    const existentialFabricPerSecondSpan = document.getElementById('existentialFabricPerSecond');
    const buyExistentialFabricButton = document.getElementById('buyExistentialFabric');
    const buyExistentialFabricBtnText = document.getElementById('buyExistentialFabricBtnText');
    const existentialFabricCost = document.getElementById('existentialFabricCost');
    const generateLoreBtnTextExistentialFabric = document.getElementById('generateLoreBtnTextExistentialFabric');

    const temporalFluxTitle = document.getElementById('temporalFluxTitle');
    const currentTemporalFluxLabel = document.getElementById('currentTemporalFluxLabel');
    const temporalFluxPerSecondLabel = document.getElementById('temporalFluxPerSecondLabel');
    const temporalFluxCountSpan = document.getElementById('temporalFluxCount');
    const temporalFluxPerSecondSpan = document.getElementById('temporalFluxPerSecond');
    const buyTemporalFluxButton = document.getElementById('buyTemporalFlux');
    const buyTemporalFluxBtnText = document.getElementById('buyTemporalFluxBtnText');
    const temporalFluxCost = document.getElementById('temporalFluxCost');
    const generateLoreBtnTextTemporalFlux = document.getElementById('generateLoreBtnTextTemporalFlux');

    const multidimensionalHarmonyTitle = document.getElementById('multidimensionalHarmonyTitle');
    const currentMultidimensionalHarmonyLabel = document.getElementById('currentMultidimensionalHarmonyLabel');
    const multidimensionalHarmonyPerSecondLabel = document.getElementById('multidimensionalHarmonyPerSecondLabel');
    const multidimensionalHarmonyCountSpan = document.getElementById('multidimensionalHarmonyCount');
    const multidimensionalHarmonyPerSecondSpan = document.getElementById('multidimensionalHarmonyPerSecond');
    const buyMultidimensionalHarmonyButton = document.getElementById('buyMultidimensionalHarmony');
    const buyMultidimensionalHarmonyBtnText = document.getElementById('buyMultidimensionalHarmonyBtnText');
    const multidimensionalHarmonyCost = document.getElementById('multidimensionalHarmonyCost');
    const generateLoreBtnTextMultidimensionalHarmony = document.getElementById('generateLoreBtnTextMultidimensionalHarmony');

    const cosmicAwakeningTitle = document.getElementById('cosmicAwakeningTitle');
    const currentCosmicAwakeningLabel = document.getElementById('currentCosmicAwakeningLabel');
    const cosmicAwakeningPerSecondLabel = document.getElementById('cosmicAwakeningPerSecondLabel');
    const cosmicAwakeningCountSpan = document.getElementById('cosmicAwakeningCount');
    const cosmicAwakeningPerSecondSpan = document.getElementById('cosmicAwakeningPerSecond');
    const buyCosmicAwakeningButton = document = document.getElementById('buyCosmicAwakening');
    const buyCosmicAwakeningBtnText = document.getElementById('buyCosmicAwakeningBtnText');
    const cosmicAwakeningCost = document.getElementById('cosmicAwakeningCost');
    const generateLoreBtnTextCosmicAwakening = document.getElementById('generateLoreBtnTextCosmicAwakening');

    const divineSparkTitle = document.getElementById('divineSparkTitle');
    const currentDivineSparkLabel = document.getElementById('currentDivineSparkLabel');
    const divineSparkPerSecondLabel = document.getElementById('divineSparkPerSecondLabel');
    const divineSparkCountSpan = document.getElementById('divineSparkCount');
    const divineSparkPerSecondSpan = document.getElementById('divineSparkPerSecond');
    const buyDivineSparkButton = document.getElementById('buyDivineSpark');
    const buyDivineSparkBtnText = document.getElementById('buyDivineSparkBtnText');
    const divineSparkCost = document.getElementById('divineSparkCost');
    const generateLoreBtnTextDivineSpark = document.getElementById('generateLoreBtnTextDivineSpark');

    const stage5Title = document.getElementById('stage5Title');
    const stage5Description = document.getElementById('stage5Description');

    const cosmicDustTitle = document.getElementById('cosmicDustTitle');
    const currentCosmicDustLabel = document.getElementById('currentCosmicDustLabel');
    const cosmicDustPerSecondLabel = document.getElementById('cosmicDustPerSecondLabel');
    const cosmicDustCountSpan = document.getElementById('cosmicDustCount');
    const cosmicDustPerSecondSpan = document.getElementById('cosmicDustPerSecond');
    const buyCosmicDustButton = document.getElementById('buyCosmicDust');
    const buyCosmicDustBtnText = document.getElementById('buyCosmicDustBtnText');
    const cosmicDustCost = document.getElementById('cosmicDustCost');
    const generateLoreBtnTextCosmicDust = document.getElementById('generateLoreBtnTextCosmicDust');

    const stellarNucleusTitle = document.getElementById('stellarNucleusTitle');
    const currentStellarNucleusLabel = document.getElementById('currentStellarNucleusLabel');
    const stellarNucleusPerSecondLabel = document.getElementById('stellarNucleusPerSecondLabel');
    const stellarNucleusCountSpan = document.getElementById('stellarNucleusCount');
    const stellarNucleusPerSecondSpan = document.getElementById('stellarNucleusPerSecond');
    const buyStellarNucleusButton = document.getElementById('buyStellarNucleus');
    const buyStellarNucleusBtnText = document.getElementById('buyStellarNucleusBtnText');
    const stellarNucleusCost = document.getElementById('stellarNucleusCost');
    const generateLoreBtnTextStellarNucleus = document.getElementById('generateLoreBtnTextStellarNucleus');

    const galacticCoreTitle = document.getElementById('galacticCoreTitle');
    const currentGalacticCoreLabel = document.getElementById('currentGalacticCoreLabel');
    const galacticCorePerSecondLabel = document.getElementById('galacticCorePerSecondLabel');
    const galacticCoreCountSpan = document.getElementById('galacticCoreCount');
    const galacticCorePerSecondSpan = document.getElementById('galacticCorePerSecond');
    const buyGalacticCoreButton = document.getElementById('buyGalacticCore');
    const buyGalacticCoreBtnText = document.getElementById('buyGalacticCoreBtnText');
    const galacticCoreCost = document.getElementById('galacticCoreCost');
    const generateLoreBtnTextGalacticCore = document.getElementById('generateLoreBtnTextGalacticCore');

    const stage6Title = document.getElementById('stage6Title');
    const stage6Description = document.getElementById('stage6Description');

    const quantumEntanglementTitle = document.getElementById('quantumEntanglementTitle');
    const currentQuantumEntanglementLabel = document.getElementById('currentQuantumEntanglementLabel');
    const quantumEntanglementPerSecondLabel = document.getElementById('quantumEntanglementPerSecondLabel');
    const quantumEntanglementCountSpan = document.getElementById('quantumEntanglementCount');
    const quantumEntanglementPerSecondSpan = document.getElementById('quantumEntanglementPerSecond');
    const buyQuantumEntanglementButton = document.getElementById('buyQuantumEntanglement');
    const buyQuantumEntanglementBtnText = document.getElementById('buyQuantumEntanglementBtnText');
    const quantumEntanglementCost = document.getElementById('quantumEntanglementCost');
    const generateLoreBtnTextQuantumEntanglement = document.getElementById('generateLoreBtnTextQuantumEntanglement');

    const dimensionalRiftTitle = document.getElementById('dimensionalRiftTitle');
    const currentDimensionalRiftLabel = document.getElementById('currentDimensionalRiftLabel');
    const dimensionalRiftPerSecondLabel = document.getElementById('dimensionalRiftPerSecondLabel');
    const dimensionalRiftCountSpan = document.getElementById('dimensionalRiftCount');
    const dimensionalRiftPerSecondSpan = document.getElementById('dimensionalRiftPerSecond');
    const buyDimensionalRiftButton = document.getElementById('buyDimensionalRift');
    const buyDimensionalRiftBtnText = document.getElementById('buyDimensionalRiftBtnText');
    const dimensionalRiftCost = document.getElementById('dimensionalRiftCost');
    const generateLoreBtnTextDimensionalRift = document.getElementById('generateLoreBtnTextDimensionalRift');

    const realityAnchorTitle = document.getElementById('realityAnchorTitle');
    const currentRealityAnchorLabel = document.getElementById('currentRealityAnchorLabel');
    const realityAnchorPerSecondLabel = document.getElementById('realityAnchorPerSecondLabel');
    const realityAnchorCountSpan = document.getElementById('realityAnchorCount');
    const realityAnchorPerSecondSpan = document.getElementById('realityAnchorPerSecond');
    const buyRealityAnchorButton = document.getElementById('buyRealityAnchor');
    const buyRealityAnchorBtnText = document.getElementById('buyRealityAnchorBtnText');
    const realityAnchorCost = document.getElementById('realityAnchorCost');
    const generateLoreBtnTextRealityAnchor = document.getElementById('generateLoreBtnTextRealityAnchor');

    const stage7Title = document.getElementById('stage7Title');
    const stage7Description = document.getElementById('stage7Description');

    const omniEnergyTitle = document.getElementById('omniEnergyTitle');
    const currentOmniEnergyLabel = document.getElementById('currentOmniEnergyLabel');
    const omniEnergyPerSecondLabel = document.getElementById('omniEnergyPerSecondLabel');
    const omniEnergyCountSpan = document.getElementById('omniEnergyCount');
    const omniEnergyPerSecondSpan = document.getElementById('omniEnergyPerSecond');
    const buyOmniEnergyButton = document.getElementById('buyOmniEnergy');
    const buyOmniEnergyBtnText = document.getElementById('buyOmniEnergyBtnText');
    const omniEnergyCost = document.getElementById('omniEnergyCost');
    const generateLoreBtnTextOmniEnergy = document.getElementById('generateLoreBtnTextOmniEnergy');

    const primeMoverTitle = document.getElementById('primeMoverTitle');
    const currentPrimeMoverLabel = document.getElementById('currentPrimeMoverLabel');
    const primeMoverPerSecondLabel = document.getElementById('primeMoverPerSecondLabel');
    const primeMoverCountSpan = document.getElementById('primeMoverCount');
    const primeMoverPerSecondSpan = document.getElementById('primeMoverPerSecond');
    const buyPrimeMoverButton = document.getElementById('buyPrimeMover');
    const buyPrimeMoverBtnText = document.getElementById('buyPrimeMoverBtnText');
    const primeMoverCost = document.getElementById('primeMoverCost');
    const generateLoreBtnTextPrimeMover = document.getElementById('generateLoreBtnTextPrimeMover');

    const trueCreatorTitle = document.getElementById('trueCreatorTitle');
    const currentTrueCreatorLabel = document.getElementById('currentTrueCreatorLabel');
    const trueCreatorPerSecondLabel = document.getElementById('trueCreatorPerSecondLabel');
    const trueCreatorCountSpan = document.getElementById('trueCreatorCount');
    const trueCreatorPerSecondSpan = document.getElementById('trueCreatorPerSecond');
    const buyTrueCreatorButton = document.getElementById('buyTrueCreator');
    const buyTrueCreatorBtnText = document.getElementById('buyTrueCreatorBtnText');
    const trueCreatorCost = document.getElementById('trueCreatorCost');
    const generateLoreBtnTextTrueCreator = document.getElementById('generateLoreBtnTextTrueCreator');

    const stage8Title = document.getElementById('stage8Title');
    const stage8Description = document.getElementById('stage8Description');

    const cosmicSingularityTitle = document.getElementById('cosmicSingularityTitle');
    const currentCosmicSingularityLabel = document.getElementById('currentCosmicSingularityLabel');
    const cosmicSingularityPerSecondLabel = document.getElementById('cosmicSingularityPerSecondLabel');
    const cosmicSingularityCountSpan = document.getElementById('cosmicSingularityCount');
    const cosmicSingularityPerSecondSpan = document.getElementById('cosmicSingularityPerSecond');
    const buyCosmicSingularityButton = document.getElementById('buyCosmicSingularity');
    const buyCosmicSingularityBtnText = document.getElementById('buyCosmicSingularityBtnText');
    const cosmicSingularityCost = document.getElementById('cosmicSingularityCost');
    const generateLoreBtnTextCosmicSingularity = document.getElementById('generateLoreBtnTextCosmicSingularity');

    const existentialTruthTitle = document.getElementById('existentialTruthTitle');
    const currentExistentialTruthLabel = document.getElementById('currentExistentialTruthLabel');
    const existentialTruthPerSecondLabel = document.getElementById('existentialTruthPerSecondLabel');
    const existentialTruthCountSpan = document.getElementById('existentialTruthCount');
    const existentialTruthPerSecondSpan = document.getElementById('existentialTruthPerSecond');
    const buyExistentialTruthButton = document.getElementById('buyExistentialTruth');
    const buyExistentialTruthBtnText = document.getElementById('buyExistentialTruthBtnText');
    const existentialTruthCost = document.getElementById('existentialTruthCost');
    const generateLoreBtnTextExistentialTruth = document.getElementById('generateLoreBtnTextExistentialTruth');

    const theUltimateFormTitle = document.getElementById('theUltimateFormTitle');
    const currentTheUltimateFormLabel = document.getElementById('currentTheUltimateFormLabel');
    const theUltimateFormPerSecondLabel = document.getElementById('theUltimateFormPerSecondLabel');
    const theUltimateFormCountSpan = document.getElementById('theUltimateFormCount');
    const theUltimateFormPerSecondSpan = document.getElementById('theUltimateFormPerSecond');
    const buyTheUltimateFormButton = document.getElementById('buyTheUltimateForm');
    const buyTheUltimateFormBtnText = document.getElementById('buyTheUltimateFormBtnText');
    const theUltimateFormCost = document.getElementById('theUltimateFormCost');
    const generateLoreBtnTextTheUltimateForm = document.getElementById('generateLoreBtnTextTheUltimateForm');

    // Stage 9 DOM elements
    const stage9Title = document.getElementById('stage9Title');
    const stage9Description = document.getElementById('stage9Description');

    const cosmicNexusTitle = document.getElementById('cosmicNexusTitle');
    const currentCosmicNexusLabel = document.getElementById('currentCosmicNexusLabel');
    const cosmicNexusPerSecondLabel = document.getElementById('cosmicNexusPerSecondLabel');
    const cosmicNexusCountSpan = document.getElementById('cosmicNexusCount');
    const cosmicNexusPerSecondSpan = document.getElementById('cosmicNexusPerSecond');
    const buyCosmicNexusButton = document.getElementById('buyCosmicNexus');
    const buyCosmicNexusBtnText = document.getElementById('buyCosmicNexusBtnText');
    const cosmicNexusCost = document.getElementById('cosmicNexusCost');
    const generateLoreBtnTextCosmicNexus = document.getElementById('generateLoreBtnTextCosmicNexus');

    const quantumSingularityTitle = document.getElementById('quantumSingularityTitle');
    const currentQuantumSingularityLabel = document.getElementById('currentQuantumSingularityLabel');
    const quantumSingularityPerSecondLabel = document.getElementById('quantumSingularityPerSecondLabel');
    const quantumSingularityCountSpan = document.getElementById('quantumSingularityCount');
    const quantumSingularityPerSecondSpan = document.getElementById('quantumSingularityPerSecond');
    const buyQuantumSingularityButton = document.getElementById('buyQuantumSingularity');
    const buyQuantumSingularityBtnText = document.getElementById('buyQuantumSingularityBtnText');
    const quantumSingularityCost = document.getElementById('quantumSingularityCost');
    const generateLoreBtnTextQuantumSingularity = document.getElementById('generateLoreBtnTextQuantumSingularity');

    const transcendentEssenceTitle = document.getElementById('transcendentEssenceTitle');
    const currentTranscendentEssenceLabel = document.getElementById('currentTranscendentEssenceLabel');
    const transcendentEssencePerSecondLabel = document.getElementById('transcendentEssencePerSecondLabel');
    const transcendentEssenceCountSpan = document.getElementById('transcendentEssenceCount');
    const transcendentEssencePerSecondSpan = document.getElementById('transcendentEssencePerSecond');
    const buyTranscendentEssenceButton = document.getElementById('buyTranscendentEssence');
    const buyTranscendentEssenceBtnText = document.getElementById('buyTranscendentEssenceBtnText');
    const transcendentEssenceCost = document.getElementById('transcendentEssenceCost');
    const generateLoreBtnTextTranscendentEssence = document.getElementById('generateLoreBtnTextTranscendentEssence');

    // Time to next resource DOM elements
    const timeToNextResourceLabel = document.getElementById('timeToNextResourceLabel');
    const timeToNextResourceSpan = document.getElementById('timeToNextResource');


    // --- Game Logic Functions ---

    // This function updates all static text content based on the current language
    function updateTextContent() {
        const lang = resources.language;
        gameTitleElement.textContent = translations[lang].gameTitle;
        gameStatsTitleElement.textContent = translations[lang].gameStatsTitle;
        timePlayedLabel.textContent = translations[lang].timePlayedLabel;
        saveGameBtn.textContent = translations[lang].saveGameBtn;
        loadGameBtn.textContent = translations[lang].loadGameBtn;

        languageSectionTitle.textContent = translations[lang].languageSectionTitle;
        currentLanguageLabel.textContent = translations[lang].currentLanguageLabel;
        currentLanguageDisplay.textContent = lang === 'en' ? 'English' : 'Tiếng Việt';
        languageToggleBtn.textContent = translations[lang].languageToggleBtn;

        ttsTitleElement.textContent = translations[lang].ttsTitle;
        ttsStatusLabel.textContent = translations[lang].ttsStatusLabel;
        ttsToggleBtn.textContent = translations[lang].ttsToggleBtn;

        quizTitleElement.textContent = translations[lang].quizTitle;
        quizAnswerInput.placeholder = translations[lang].quizAnswerInputPlaceholder;
        submitQuizAnswerButton.textContent = translations[lang].submitQuizAnswer;

        stage1Title.textContent = translations[lang].stage1Title;
        stage1Description.textContent = translations[lang].stage1Description;

        woodTitle.textContent = translations[lang].woodTitle;
        currentWoodLabel.textContent = translations[lang].currentWoodLabel;
        woodPerSecondLabel.textContent = translations[lang].woodPerSecondLabel;
        chopWoodBtnText.textContent = translations[lang].chopWoodBtnText;
        upgradeChopPowerBtnText.textContent = translations[lang].upgradeChopPowerBtnText;
        chopUpgradeCostLabel.textContent = translations[lang].chopUpgradeCostLabel;
        woodCostUnit.textContent = translations[lang].woodCostUnit;
        automateWoodBtnText.textContent = translations[lang].automateWoodBtnText;
        woodAutoUnit.textContent = translations[lang].woodAutoUnit;
        woodAutomationCostLabel.textContent = translations[lang].woodAutomationCostLabel;
        woodAutoCostUnit.textContent = translations[lang].woodAutoCostUnit;

        // Update text for other resource sections
        stoneTitle.textContent = translations[lang].stoneTitle;
        currentStoneLabel.textContent = translations[lang].currentStoneLabel;
        stonePerSecondLabel.textContent = translations[lang].stonePerSecondLabel;
        buyStoneBtnText.textContent = translations[lang].buyStoneBtnText;
        generateLoreBtnTextStone.textContent = translations[lang].generateLoreBtnText;

        ironTitle.textContent = translations[lang].ironTitle;
        currentIronLabel.textContent = translations[lang].currentIronLabel;
        ironPerSecondLabel.textContent = translations[lang].ironPerSecondLabel;
        buyIronBtnText.textContent = translations[lang].buyIronBtnText;
        generateLoreBtnTextIron.textContent = translations[lang].generateLoreBtnText;

        alloyTitle.textContent = translations[lang].alloyTitle;
        currentAlloyLabel.textContent = translations[lang].currentAlloyLabel;
        alloyPerSecondLabel.textContent = translations[lang].alloyPerSecondLabel;
        buyAlloyBtnText.textContent = translations[lang].buyAlloyBtnText;
        generateLoreBtnTextAlloy.textContent = translations[lang].generateLoreBtnText;

        circuitryTitle.textContent = translations[lang].circuitryTitle;
        currentCircuitryLabel.textContent = translations[lang].currentCircuitryLabel;
        circuitryPerSecondLabel.textContent = translations[lang].circuitryPerSecondLabel;
        buyCircuitryBtnText.textContent = translations[lang].buyCircuitryBtnText;
        generateLoreBtnTextCircuitry.textContent = translations[lang].generateLoreBtnText;

        aiCoreTitle.textContent = translations[lang].aiCoreTitle;
        currentAICoreLabel.textContent = translations[lang].currentAICoreLabel;
        aiCorePerSecondLabel.textContent = translations[lang].aiCorePerSecondLabel;
        buyAICoreBtnText.textContent = translations[lang].buyAICoreBtnText;
        generateLoreBtnTextAICore.textContent = translations[lang].generateLoreBtnText;

        consciousnessTitle.textContent = translations[lang].consciousnessTitle;
        currentConsciousnessLabel.textContent = translations[lang].currentConsciousnessLabel;
        consciousnessPerSecondLabel.textContent = translations[lang].consciousnessPerSecondLabel;
        buyConsciousnessBtnText.textContent = translations[lang].buyConsciousnessBtnText;
        generateLoreBtnTextConsciousness.textContent = translations[lang].generateLoreBtnText;

        realityShardTitle.textContent = translations[lang].realityShardTitle;
        currentRealityShardLabel.textContent = translations[lang].currentRealityShardLabel;
        realityShardPerSecondLabel.textContent = translations[lang].realityShardPerSecondLabel;
        buyRealityShardBtnText.textContent = translations[lang].buyRealityShardBtnText;
        generateLoreBtnTextRealityShard.textContent = translations[lang].generateLoreBtnText;

        paradoxTitle.textContent = translations[lang].paradoxTitle;
        currentParadoxLabel.textContent = translations[lang].currentParadoxLabel;
        paradoxPerSecondLabel.textContent = translations[lang].paradoxPerSecondLabel;
        buyParadoxBtnText.textContent = translations[lang].buyParadoxBtnText;
        generateLoreBtnTextParadox.textContent = translations[lang].generateLoreBtnText;

        singularityTitle.textContent = translations[lang].singularityTitle;
        currentSingularityLabel.textContent = translations[lang].currentSingularityLabel;
        singularityPerSecondLabel.textContent = translations[lang].singularityPerSecondLabel;
        buySingularityBtnText.textContent = translations[lang].buySingularityBtnText;
        generateLoreBtnTextSingularity.textContent = translations[lang].generateLoreBtnText;

        multiverseTitle.textContent = translations[lang].multiverseTitle;
        currentMultiverseLabel.textContent = translations[lang].currentMultiverseLabel;
        multiversePerSecondLabel.textContent = translations[lang].multiversePerSecondLabel;
        buyMultiverseBtnText.textContent = translations[lang].buyMultiverseBtnText;
        generateLoreBtnTextMultiverse.textContent = translations[lang].generateLoreBtnText;

        omniscienceTitle.textContent = translations[lang].omniscienceTitle;
        currentOmniscienceLabel.textContent = translations[lang].currentOmniscienceLabel;
        omnisciencePerSecondLabel.textContent = translations[lang].omnisciencePerSecondLabel;
        buyOmniscienceBtnText.textContent = translations[lang].buyOmniscienceBtnText;
        generateLoreBtnTextOmniscience.textContent = translations[lang].generateLoreBtnText;

        genesisTitle.textContent = translations[lang].genesisTitle;
        currentGenesisLabel.textContent = translations[lang].currentGenesisLabel;
        genesisPerSecondLabel.textContent = translations[lang].genesisPerSecondLabel;
        buyGenesisBtnText.textContent = translations[lang].buyGenesisBtnText;
        generateLoreBtnTextGenesis.textContent = translations[lang].generateLoreBtnText;

        voidTitle.textContent = translations[lang].voidTitle;
        currentVoidLabel.textContent = translations[lang].currentVoidLabel;
        voidPerSecondLabel.textContent = translations[lang].voidPerSecondLabel;
        buyVoidBtnText.textContent = translations[lang].buyVoidBtnText;
        generateLoreBtnTextVoid.textContent = translations[lang].generateLoreBtnText;

        stage2Title.textContent = translations[lang].stage2Title;
        stage2Description.textContent = translations[lang].stage2Description;

        theAllTitle.textContent = translations[lang].theAllTitle;
        currentTheAllLabel.textContent = translations[lang].currentTheAllLabel;
        theAllPerSecondLabel.textContent = translations[lang].theAllPerSecondLabel;
        buyTheAllBtnText.textContent = translations[lang].buyTheAllBtnText(resources.theAll.conversionCost);
        generateLoreBtnTextTheAll.textContent = translations[lang].generateLoreBtnText;

        transcendenceTitle.textContent = translations[lang].transcendenceTitle;
        currentTranscendenceLabel.textContent = translations[lang].currentTranscendenceLabel;
        transcendencePerSecondLabel.textContent = translations[lang].transcendencePerSecondLabel;
        buyTranscendenceBtnText.textContent = translations[lang].buyTranscendenceBtnText(resources.transcendence.conversionCost);
        generateLoreBtnTextTranscendence.textContent = translations[lang].generateLoreBtnText;

        theAbsoluteTitle.textContent = translations[lang].theAbsoluteTitle;
        currentTheAbsoluteLabel.textContent = translations[lang].currentTheAbsoluteLabel;
        theAbsolutePerSecondLabel.textContent = translations[lang].theAbsolutePerSecondLabel;
        buyTheAbsoluteBtnText.textContent = translations[lang].buyTheAbsoluteBtnText(resources.theAbsolute.conversionCost);
        generateLoreBtnTextTheAbsolute.textContent = translations[lang].generateLoreBtnText;

        theEndTitle.textContent = translations[lang].theEndTitle;
        currentTheEndLabel.textContent = translations[lang].currentTheEndLabel;
        theEndPerSecondLabel.textContent = translations[lang].theEndPerSecondLabel;
        buyTheEndBtnText.textContent = translations[lang].buyTheEndBtnText(resources.theEnd.conversionCost);
        generateLoreBtnTextTheEnd.textContent = translations[lang].generateLoreBtnText;

        theNewBeginningTitle.textContent = translations[lang].theNewBeginningTitle;
        currentTheNewBeginningLabel.textContent = translations[lang].currentTheNewBeginningLabel;
        theNewBeginningPerSecondLabel.textContent = translations[lang].theNewBeginningPerSecondLabel;
        buyTheNewBeginningBtnText.textContent = translations[lang].buyTheNewBeginningBtnText(resources.theNewBeginning.conversionCost);
        generateLoreBtnTextTheNewBeginning.textContent = translations[lang].generateLoreBtnText;

        theArchitectsWillTitle.textContent = translations[lang].theArchitectsWillTitle;
        currentTheArchitectsWillLabel.textContent = translations[lang].currentTheArchitectsWillLabel;
        theArchitectsWillPerSecondLabel.textContent = translations[lang].theArchitectsWillPerSecondLabel;
        buyTheArchitectsWillBtnText.textContent = translations[lang].buyTheArchitectsWillBtnText(resources.theArchitectsWill.conversionCost);
        generateLoreBtnTextTheArchitectsWill.textContent = translations[lang].generateLoreBtnText;

        theOmniverseTitle.textContent = translations[lang].theOmniverseTitle;
        currentTheOmniverseLabel.textContent = translations[lang].currentTheOmniverseLabel;
        theOmniversePerSecondLabel.textContent = translations[lang].theOmniversePerSecondLabel;
        buyTheOmniverseBtnText.textContent = translations[lang].buyTheOmniverseBtnText(resources.theOmniverse.conversionCost);
        generateLoreBtnTextTheOmniverse.textContent = translations[lang].generateLoreBtnText;

        stage3Title.textContent = translations[lang].stage3Title;
        stage3Description.textContent = translations[lang].stage3Description;

        theBoundlessVoidTitle.textContent = translations[lang].theBoundlessVoidTitle;
        currentTheBoundlessVoidLabel.textContent = translations[lang].currentTheBoundlessVoidLabel;
        theBoundlessVoidPerSecondLabel.textContent = translations[lang].theBoundlessVoidPerSecondLabel;
        buyTheBoundlessVoidBtnText.textContent = translations[lang].buyTheBoundlessVoidBtnText(resources.theBoundlessVoid.conversionCost);
        generateLoreBtnTextTheBoundlessVoid.textContent = translations[lang].generateLoreBtnText;

        cosmicFabricTitle.textContent = translations[lang].cosmicFabricTitle;
        currentCosmicFabricLabel.textContent = translations[lang].currentCosmicFabricLabel;
        cosmicFabricPerSecondLabel.textContent = translations[lang].cosmicFabricPerSecondLabel;
        buyCosmicFabricBtnText.textContent = translations[lang].buyCosmicFabricBtnText(resources.cosmicFabric.conversionCost);
        generateLoreBtnTextCosmicFabric.textContent = translations[lang].generateLoreBtnText;

        infiniteNexusTitle.textContent = translations[lang].infiniteNexusTitle;
        currentInfiniteNexusLabel.textContent = translations[lang].currentInfiniteNexusLabel;
        infiniteNexusPerSecondLabel.textContent = translations[lang].infiniteNexusPerSecondLabel;
        buyInfiniteNexusBtnText.textContent = translations[lang].buyInfiniteNexusBtnText(resources.infiniteNexus.conversionCost);
        generateLoreBtnTextInfiniteNexus.textContent = translations[lang].generateLoreBtnText;

        eternalEchoTitle.textContent = translations[lang].eternalEchoTitle;
        currentEternalEchoLabel.textContent = translations[lang].currentEternalEchoLabel;
        eternalEchoPerSecondLabel.textContent = translations[lang].eternalEchoPerSecondLabel;
        buyEternalEchoBtnText.textContent = translations[lang].buyEternalEchoBtnText(resources.eternalEcho.conversionCost);
        generateLoreBtnTextEternalEcho.textContent = translations[lang].generateLoreBtnText;

        zenithOfCreationTitle.textContent = translations[lang].zenithOfCreationTitle;
        currentZenithOfCreationLabel.textContent = translations[lang].currentZenithOfCreationLabel;
        zenithOfCreationPerSecondLabel.textContent = translations[lang].zenithOfCreationPerSecondLabel;
        buyZenithOfCreationBtnText.textContent = translations[lang].buyZenithOfCreationBtnText(resources.zenithOfCreation.conversionCost);
        generateLoreBtnTextZenithOfCreation.textContent = translations[lang].generateLoreBtnText;

        stage4Title.textContent = translations[lang].stage4Title;
        stage4Description.textContent = translations[lang].stage4Description;

        universalSingularityTitle.textContent = translations[lang].universalSingularityTitle;
        currentUniversalSingularityLabel.textContent = translations[lang].currentUniversalSingularityLabel;
        universalSingularityPerSecondLabel.textContent = translations[lang].universalSingularityPerSecondLabel;
        buyUniversalSingularityBtnText.textContent = translations[lang].buyUniversalSingularityBtnText(resources.universalSingularity.conversionCost);
        generateLoreBtnTextUniversalSingularity.textContent = translations[lang].generateLoreBtnText;

        existentialFabricTitle.textContent = translations[lang].existentialFabricTitle;
        currentExistentialFabricLabel.textContent = translations[lang].currentExistentialFabricLabel;
        existentialFabricPerSecondLabel.textContent = translations[lang].existentialFabricPerSecondLabel;
        buyExistentialFabricBtnText.textContent = translations[lang].buyExistentialFabricBtnText(resources.existentialFabric.conversionCost);
        generateLoreBtnTextExistentialFabric.textContent = translations[lang].generateLoreBtnText;

        temporalFluxTitle.textContent = translations[lang].temporalFluxTitle;
        currentTemporalFluxLabel.textContent = translations[lang].currentTemporalFluxLabel;
        temporalFluxPerSecondLabel.textContent = translations[lang].temporalFluxPerSecondLabel;
        buyTemporalFluxBtnText.textContent = translations[lang].buyTemporalFluxBtnText(resources.temporalFlux.conversionCost);
        generateLoreBtnTextTemporalFlux.textContent = translations[lang].generateLoreBtnText;

        multidimensionalHarmonyTitle.textContent = translations[lang].multidimensionalHarmonyTitle;
        currentMultidimensionalHarmonyLabel.textContent = translations[lang].currentMultidimensionalHarmonyLabel;
        multidimensionalHarmonyPerSecondLabel.textContent = translations[lang].multidimensionalHarmonyPerSecondLabel;
        buyMultidimensionalHarmonyBtnText.textContent = translations[lang].buyMultidimensionalHarmonyBtnText(resources.multidimensionalHarmony.conversionCost);
        generateLoreBtnTextMultidimensionalHarmony.textContent = translations[lang].generateLoreBtnText;

        cosmicAwakeningTitle.textContent = translations[lang].cosmicAwakeningTitle;
        currentCosmicAwakeningLabel.textContent = translations[lang].currentCosmicAwakeningLabel;
        cosmicAwakeningPerSecondLabel.textContent = translations[lang].cosmicAwakeningPerSecondLabel;
        buyCosmicAwakeningBtnText.textContent = translations[lang].buyCosmicAwakeningBtnText(resources.cosmicAwakening.conversionCost);
        generateLoreBtnTextCosmicAwakening.textContent = translations[lang].generateLoreBtnText;

        divineSparkTitle.textContent = translations[lang].divineSparkTitle;
        currentDivineSparkLabel.textContent = translations[lang].currentDivineSparkLabel;
        divineSparkPerSecondLabel.textContent = translations[lang].divineSparkPerSecondLabel;
        buyDivineSparkBtnText.textContent = translations[lang].buyDivineSparkBtnText(resources.divineSpark.conversionCost);
        generateLoreBtnTextDivineSpark.textContent = translations[lang].generateLoreBtnText;

        stage5Title.textContent = translations[lang].stage5Title;
        stage5Description.textContent = translations[lang].stage5Description;

        cosmicDustTitle.textContent = translations[lang].cosmicDustTitle;
        currentCosmicDustLabel.textContent = translations[lang].currentCosmicDustLabel;
        cosmicDustPerSecondLabel.textContent = translations[lang].cosmicDustPerSecondLabel;
        buyCosmicDustBtnText.textContent = translations[lang].buyCosmicDustBtnText(resources.cosmicDust.conversionCost);
        generateLoreBtnTextCosmicDust.textContent = translations[lang].generateLoreBtnText;

        stellarNucleusTitle.textContent = translations[lang].stellarNucleusTitle;
        currentStellarNucleusLabel.textContent = translations[lang].currentStellarNucleusLabel;
        stellarNucleusPerSecondLabel.textContent = translations[lang].stellarNucleusPerSecondLabel;
        buyStellarNucleusBtnText.textContent = translations[lang].buyStellarNucleusBtnText(resources.stellarNucleus.conversionCost);
        generateLoreBtnTextStellarNucleus.textContent = translations[lang].generateLoreBtnText;

        galacticCoreTitle.textContent = translations[lang].galacticCoreTitle;
        currentGalacticCoreLabel.textContent = translations[lang].currentGalacticCoreLabel;
        galacticCorePerSecondLabel.textContent = translations[lang].galacticCorePerSecondLabel;
        buyGalacticCoreBtnText.textContent = translations[lang].buyGalacticCoreBtnText(resources.galacticCore.conversionCost);
        generateLoreBtnTextGalacticCore.textContent = translations[lang].generateLoreBtnText;

        stage6Title.textContent = translations[lang].stage6Title;
        stage6Description.textContent = translations[lang].stage6Description;

        quantumEntanglementTitle.textContent = translations[lang].quantumEntanglementTitle;
        currentQuantumEntanglementLabel.textContent = translations[lang].currentQuantumEntanglementLabel;
        quantumEntanglementPerSecondLabel.textContent = translations[lang].quantumEntanglementPerSecondLabel;
        buyQuantumEntanglementBtnText.textContent = translations[lang].buyQuantumEntanglementBtnText(resources.quantumEntanglement.conversionCost);
        generateLoreBtnTextQuantumEntanglement.textContent = translations[lang].generateLoreBtnText;

        dimensionalRiftTitle.textContent = translations[lang].dimensionalRiftTitle;
        currentDimensionalRiftLabel.textContent = translations[lang].currentDimensionalRiftLabel;
        dimensionalRiftPerSecondLabel.textContent = translations[lang].dimensionalRiftPerSecondLabel;
        buyDimensionalRiftBtnText.textContent = translations[lang].buyDimensionalRiftBtnText(resources.dimensionalRift.conversionCost);
        generateLoreBtnTextDimensionalRift.textContent = translations[lang].generateLoreBtnText;

        realityAnchorTitle.textContent = translations[lang].realityAnchorTitle;
        currentRealityAnchorLabel.textContent = translations[lang].currentRealityAnchorLabel;
        realityAnchorPerSecondLabel.textContent = translations[lang].realityAnchorPerSecondLabel;
        buyRealityAnchorBtnText.textContent = translations[lang].buyRealityAnchorBtnText(resources.realityAnchor.conversionCost);
        generateLoreBtnTextRealityAnchor.textContent = translations[lang].generateLoreBtnText;

        stage7Title.textContent = translations[lang].stage7Title;
        stage7Description.textContent = translations[lang].stage7Description;

        omniEnergyTitle.textContent = translations[lang].omniEnergyTitle;
        currentOmniEnergyLabel.textContent = translations[lang].currentOmniEnergyLabel;
        omniEnergyPerSecondLabel.textContent = translations[lang].omniEnergyPerSecondLabel;
        buyOmniEnergyBtnText.textContent = translations[lang].buyOmniEnergyBtnText(resources.omniEnergy.conversionCost);
        generateLoreBtnTextOmniEnergy.textContent = translations[lang].generateLoreBtnText;

        primeMoverTitle.textContent = translations[lang].primeMoverTitle;
        currentPrimeMoverLabel.textContent = translations[lang].currentPrimeMoverLabel;
        primeMoverPerSecondLabel.textContent = translations[lang].primeMoverPerSecondLabel;
        buyPrimeMoverBtnText.textContent = translations[lang].buyPrimeMoverBtnText(resources.primeMover.conversionCost);
        generateLoreBtnTextPrimeMover.textContent = translations[lang].generateLoreBtnText;

        trueCreatorTitle.textContent = translations[lang].trueCreatorTitle;
        currentTrueCreatorLabel.textContent = translations[lang].currentTrueCreatorLabel;
        trueCreatorPerSecondLabel.textContent = translations[lang].trueCreatorPerSecondLabel;
        buyTrueCreatorBtnText.textContent = translations[lang].buyTrueCreatorBtnText(resources.trueCreator.conversionCost);
        generateLoreBtnTextTrueCreator.textContent = translations[lang].generateLoreBtnText;

        stage8Title.textContent = translations[lang].stage8Title;
        stage8Description.textContent = translations[lang].stage8Description;

        cosmicSingularityTitle.textContent = translations[lang].cosmicSingularityTitle;
        currentCosmicSingularityLabel.textContent = translations[lang].currentCosmicSingularityLabel;
        cosmicSingularityPerSecondLabel.textContent = translations[lang].cosmicSingularityPerSecondLabel;
        buyCosmicSingularityBtnText.textContent = translations[lang].buyCosmicSingularityBtnText(resources.cosmicSingularity.conversionCost);
        generateLoreBtnTextCosmicSingularity.textContent = translations[lang].generateLoreBtnText;

        existentialTruthTitle.textContent = translations[lang].existentialTruthTitle;
        currentExistentialTruthLabel.textContent = translations[lang].currentExistentialTruthLabel;
        existentialTruthPerSecondLabel.textContent = translations[lang].existentialTruthPerSecondLabel;
        buyExistentialTruthBtnText.textContent = translations[lang].buyExistentialTruthBtnText(resources.existentialTruth.conversionCost);
        generateLoreBtnTextExistentialTruth.textContent = translations[lang].generateLoreBtnText;

        theUltimateFormTitle.textContent = translations[lang].theUltimateFormTitle;
        currentTheUltimateFormLabel.textContent = translations[lang].currentTheUltimateFormLabel;
        theUltimateFormPerSecondLabel.textContent = translations[lang].theUltimateFormPerSecondLabel;
        buyTheUltimateFormBtnText.textContent = translations[lang].buyTheUltimateFormBtnText(resources.theUltimateForm.conversionCost);
        generateLoreBtnTextTheUltimateForm.textContent = translations[lang].generateLoreBtnText;

        // Stage 9 translations
        stage9Title.textContent = translations[lang].stage9Title;
        stage9Description.textContent = translations[lang].stage9Description;

        cosmicNexusTitle.textContent = translations[lang].cosmicNexusTitle;
        currentCosmicNexusLabel.textContent = translations[lang].currentCosmicNexusLabel;
        cosmicNexusPerSecondLabel.textContent = translations[lang].cosmicNexusPerSecondLabel;
        buyCosmicNexusBtnText.textContent = translations[lang].buyCosmicNexusBtnText(resources.cosmicNexus.conversionCost);
        generateLoreBtnTextCosmicNexus.textContent = translations[lang].generateLoreBtnText;

        quantumSingularityTitle.textContent = translations[lang].quantumSingularityTitle;
        currentQuantumSingularityLabel.textContent = translations[lang].currentQuantumSingularityLabel;
        quantumSingularityPerSecondLabel.textContent = translations[lang].quantumSingularityPerSecondLabel;
        buyQuantumSingularityBtnText.textContent = translations[lang].buyQuantumSingularityBtnText(resources.quantumSingularity.conversionCost);
        generateLoreBtnTextQuantumSingularity.textContent = translations[lang].generateLoreBtnText;

        transcendentEssenceTitle.textContent = translations[lang].transcendentEssenceTitle;
        currentTranscendentEssenceLabel.textContent = translations[lang].currentTranscendentEssenceLabel;
        transcendentEssencePerSecondLabel.textContent = translations[lang].transcendentEssencePerSecondLabel;
        buyTranscendentEssenceBtnText.textContent = translations[lang].buyTranscendentEssenceBtnText(resources.transcendentEssence.conversionCost);
        generateLoreBtnTextTranscendentEssence.textContent = translations[lang].generateLoreBtnText;

        // Time to next resource translations
        timeToNextResourceLabel.textContent = translations[lang].timeToNextResourceLabel;


        discordInviteText.textContent = translations[lang].discordInviteText;

        // Update placeholder for quiz input
        quizAnswerInput.placeholder = translations[lang].quizAnswerInputPlaceholder;
    }

    function updateDisplay() {
        // Update all resources based on their perSecond rates
        woodCountSpan.textContent = resources.wood.count.toFixed(0);
        woodPerSecondSpan.textContent = resources.wood.perSecond.toFixed(1);
        chopPowerDisplay.textContent = `+${resources.wood.manualClickAmount}`;
        chopUpgradeCostSpan.textContent = resources.wood.upgradeCost;
        upgradeChopPowerButton.disabled = resources.wood.count < resources.wood.upgradeCost;
        woodPerSecondCostSpan.textContent = resources.wood.automationCost.toFixed(0);
        buyWoodPerSecondButton.disabled = resources.wood.count < resources.wood.automationCost;

        stoneCountSpan.textContent = resources.stone.count.toFixed(0);
        stonePerSecondSpan.textContent = resources.stone.perSecond.toFixed(1);
        buyStoneButton.disabled = resources.wood.count < resources.stone.conversionCost;

        ironCountSpan.textContent = resources.iron.count.toFixed(0);
        ironPerSecondSpan.textContent = resources.iron.perSecond.toFixed(1);
        buyIronButton.disabled = resources.stone.count < resources.iron.conversionCost;

        alloyCountSpan.textContent = resources.alloy.count.toFixed(0);
        alloyPerSecondSpan.textContent = resources.alloy.perSecond.toFixed(1);
        buyAlloyButton.disabled = resources.iron.count < resources.alloy.conversionCost;

        circuitryCountSpan.textContent = resources.circuitry.count.toFixed(0);
        circuitryPerSecondSpan.textContent = resources.circuitry.perSecond.toFixed(1);
        buyCircuitryButton.disabled = resources.alloy.count < resources.circuitry.conversionCost;

        aiCoreCountSpan.textContent = resources.aiCore.count.toFixed(0);
        aiCorePerSecondSpan.textContent = resources.aiCore.perSecond.toFixed(1);
        buyAICoreButton.disabled = resources.circuitry.count < resources.aiCore.conversionCost;

        consciousnessCountSpan.textContent = resources.consciousness.count.toFixed(0);
        consciousnessPerSecondSpan.textContent = resources.consciousness.perSecond.toFixed(1);
        buyConsciousnessButton.disabled = resources.aiCore.count < resources.consciousness.conversionCost;

        realityShardCountSpan.textContent = resources.realityShard.count.toFixed(0);
        realityShardPerSecondSpan.textContent = resources.realityShard.perSecond.toFixed(1);
        buyRealityShardButton.disabled = resources.consciousness.count < resources.realityShard.conversionCost;

        paradoxCountSpan.textContent = resources.paradox.count.toFixed(0);
        paradoxPerSecondSpan.textContent = resources.paradox.perSecond.toFixed(1);
        buyParadoxButton.disabled = resources.realityShard.count < resources.paradox.conversionCost;

        singularityCountSpan.textContent = resources.singularity.count.toFixed(0);
        singularityPerSecondSpan.textContent = resources.singularity.perSecond.toFixed(1);
        buySingularityButton.disabled = resources.paradox.count < resources.singularity.conversionCost;

        multiverseCountSpan.textContent = resources.multiverse.count.toFixed(0);
        multiversePerSecondSpan.textContent = resources.multiverse.perSecond.toFixed(1);
        buyMultiverseButton.disabled = resources.singularity.count < resources.multiverse.conversionCost;

        omniscienceCountSpan.textContent = resources.omniscience.count.toFixed(0);
        omnisciencePerSecondSpan.textContent = resources.omniscience.perSecond.toFixed(1);
        buyOmniscienceButton.disabled = resources.multiverse.count < resources.omniscience.conversionCost;

        genesisCountSpan.textContent = resources.genesis.count.toFixed(0);
        genesisPerSecondSpan.textContent = resources.genesis.perSecond.toFixed(1);
        buyGenesisButton.disabled = resources.omniscience.count < resources.genesis.conversionCost;

        voidCountSpan.textContent = resources.void.count.toFixed(0);
        voidPerSecondSpan.textContent = resources.void.perSecond.toFixed(1);
        buyVoidButton.disabled = resources.genesis.count < resources.void.conversionCost;

        theAllCountSpan.textContent = resources.theAll.count.toFixed(0);
        theAllPerSecondSpan.textContent = resources.theAll.perSecond.toFixed(1);
        theAllCost.textContent = resources.theAll.conversionCost;
        buyTheAllButton.disabled = resources.void.count < resources.theAll.conversionCost;

        transcendenceCountSpan.textContent = resources.transcendence.count.toFixed(0);
        transcendencePerSecondSpan.textContent = resources.transcendence.perSecond.toFixed(1);
        transcendenceCost.textContent = resources.transcendence.conversionCost;
        buyTranscendenceButton.disabled = resources.theAll.count < resources.transcendence.conversionCost;

        theAbsoluteCountSpan.textContent = resources.theAbsolute.count.toFixed(0);
        theAbsolutePerSecondSpan.textContent = resources.theAbsolute.perSecond.toFixed(1);
        theAbsoluteCost.textContent = resources.theAbsolute.conversionCost;
        buyTheAbsoluteButton.disabled = resources.transcendence.count < resources.theAbsolute.conversionCost;

        theEndCountSpan.textContent = resources.theEnd.count.toFixed(0);
        theEndPerSecondSpan.textContent = resources.theEnd.perSecond.toFixed(1);
        theEndCost.textContent = resources.theEnd.conversionCost;
        buyTheEndButton.disabled = resources.theAbsolute.count < resources.theEnd.conversionCost;

        theNewBeginningCountSpan.textContent = resources.theNewBeginning.count.toFixed(0);
        theNewBeginningPerSecondSpan.textContent = resources.theNewBeginning.perSecond.toFixed(1);
        theNewBeginningCostSpan.textContent = resources.theNewBeginning.conversionCost;
        buyTheNewBeginningButton.disabled = resources.theEnd.count < resources.theNewBeginning.conversionCost;

        theArchitectsWillCountSpan.textContent = resources.theArchitectsWill.count.toFixed(0);
        theArchitectsWillPerSecondSpan.textContent = resources.theArchitectsWill.perSecond.toFixed(1);
        theArchitectsWillCostSpan.textContent = resources.theArchitectsWill.conversionCost;
        buyTheArchitectsWillButton.disabled = resources.theNewBeginning.count < resources.theArchitectsWill.conversionCost;

        theOmniverseCountSpan.textContent = resources.theOmniverse.count.toFixed(0);
        theOmniversePerSecondSpan.textContent = resources.theOmniverse.perSecond.toFixed(1);
        theOmniverseCost.textContent = resources.theOmniverse.conversionCost;
        buyTheOmniverseButton.disabled = resources.theArchitectsWill.count < resources.theOmniverse.conversionCost;

        theBoundlessVoidCountSpan.textContent = resources.theBoundlessVoid.count.toFixed(0);
        theBoundlessVoidPerSecondSpan.textContent = resources.theBoundlessVoid.perSecond.toFixed(1);
        theBoundlessVoidCost.textContent = resources.theBoundlessVoid.conversionCost;
        buyTheBoundlessVoidButton.disabled = resources.theOmniverse.count < resources.theBoundlessVoid.conversionCost;

        cosmicFabricCountSpan.textContent = resources.cosmicFabric.count.toFixed(0);
        cosmicFabricPerSecondSpan.textContent = resources.cosmicFabric.perSecond.toFixed(1);
        cosmicFabricCost.textContent = resources.cosmicFabric.conversionCost;
        buyCosmicFabricButton.disabled = resources.theBoundlessVoid.count < resources.cosmicFabric.conversionCost;

        infiniteNexusCountSpan.textContent = resources.infiniteNexus.count.toFixed(0);
        infiniteNexusPerSecondSpan.textContent = resources.infiniteNexus.perSecond.toFixed(1);
        infiniteNexusCost.textContent = resources.infiniteNexus.conversionCost;
        buyInfiniteNexusButton.disabled = resources.cosmicFabric.count < resources.infiniteNexus.conversionCost;

        eternalEchoCountSpan.textContent = resources.eternalEcho.count.toFixed(0);
        eternalEchoPerSecondSpan.textContent = resources.eternalEcho.perSecond.toFixed(1);
        eternalEchoCost.textContent = resources.eternalEcho.conversionCost;
        buyEternalEchoButton.disabled = resources.infiniteNexus.count < resources.eternalEcho.conversionCost;

        zenithOfCreationCountSpan.textContent = resources.zenithOfCreation.count.toFixed(0);
        zenithOfCreationPerSecondSpan.textContent = resources.zenithOfCreation.perSecond.toFixed(1);
        zenithOfCreationCost.textContent = resources.zenithOfCreation.conversionCost;
        buyZenithOfCreationButton.disabled = resources.eternalEcho.count < resources.zenithOfCreation.conversionCost;

        universalSingularityCountSpan.textContent = resources.universalSingularity.count.toFixed(0);
        universalSingularityPerSecondSpan.textContent = resources.universalSingularity.perSecond.toFixed(1);
        universalSingularityCost.textContent = resources.universalSingularity.conversionCost;
        buyUniversalSingularityButton.disabled = resources.zenithOfCreation.count < resources.universalSingularity.conversionCost;

        existentialFabricCountSpan.textContent = resources.existentialFabric.count.toFixed(0);
        existentialFabricPerSecondSpan.textContent = resources.existentialFabric.perSecond.toFixed(1);
        existentialFabricCost.textContent = resources.existentialFabric.conversionCost;
        buyExistentialFabricButton.disabled = resources.universalSingularity.count < resources.existentialFabric.conversionCost;

        temporalFluxCountSpan.textContent = resources.temporalFlux.count.toFixed(0);
        temporalFluxPerSecondSpan.textContent = resources.temporalFlux.perSecond.toFixed(1);
        temporalFluxCost.textContent = resources.temporalFlux.conversionCost;
        buyTemporalFluxButton.disabled = resources.existentialFabric.count < resources.temporalFlux.conversionCost;

        multidimensionalHarmonyCountSpan.textContent = resources.multidimensionalHarmony.count.toFixed(0);
        multidimensionalHarmonyPerSecondSpan.textContent = resources.multidimensionalHarmony.perSecond.toFixed(1);
        multidimensionalHarmonyCost.textContent = resources.multidimensionalHarmony.conversionCost;
        buyMultidimensionalHarmonyButton.disabled = resources.temporalFlux.count < resources.multidimensionalHarmony.conversionCost;

        cosmicAwakeningCountSpan.textContent = resources.cosmicAwakening.count.toFixed(0);
        cosmicAwakeningPerSecondSpan.textContent = resources.cosmicAwakening.perSecond.toFixed(1);
        cosmicAwakeningCost.textContent = resources.cosmicAwakening.conversionCost;
        buyCosmicAwakeningButton.disabled = resources.multidimensionalHarmony.count < resources.cosmicAwakening.conversionCost;

        divineSparkCountSpan.textContent = resources.divineSpark.count.toFixed(0);
        divineSparkPerSecondSpan.textContent = resources.divineSpark.perSecond.toFixed(1);
        divineSparkCost.textContent = resources.divineSpark.conversionCost;
        buyDivineSparkButton.disabled = resources.cosmicAwakening.count < resources.divineSpark.conversionCost;

        // Stage 5
        cosmicDustCountSpan.textContent = resources.cosmicDust.count.toFixed(0);
        cosmicDustPerSecondSpan.textContent = resources.cosmicDust.perSecond.toFixed(1);
        cosmicDustCost.textContent = resources.cosmicDust.conversionCost;
        buyCosmicDustButton.disabled = resources.divineSpark.count < resources.cosmicDust.conversionCost;

        stellarNucleusCountSpan.textContent = resources.stellarNucleus.count.toFixed(0);
        stellarNucleusPerSecondSpan.textContent = resources.stellarNucleus.perSecond.toFixed(1);
        stellarNucleusCost.textContent = resources.stellarNucleus.conversionCost;
        buyStellarNucleusButton.disabled = resources.cosmicDust.count < resources.stellarNucleus.conversionCost;

        galacticCoreCountSpan.textContent = resources.galacticCore.count.toFixed(0);
        galacticCorePerSecondSpan.textContent = resources.galacticCore.perSecond.toFixed(1);
        galacticCoreCost.textContent = resources.galacticCore.conversionCost;
        buyGalacticCoreButton.disabled = resources.stellarNucleus.count < resources.galacticCore.conversionCost;

        // Stage 6
        quantumEntanglementCountSpan.textContent = resources.quantumEntanglement.count.toFixed(0);
        quantumEntanglementPerSecondSpan.textContent = resources.quantumEntanglement.perSecond.toFixed(1);
        quantumEntanglementCost.textContent = resources.quantumEntanglement.conversionCost;
        buyQuantumEntanglementButton.disabled = resources.galacticCore.count < resources.quantumEntanglement.conversionCost;

        dimensionalRiftCountSpan.textContent = resources.dimensionalRift.count.toFixed(0);
        dimensionalRiftPerSecondSpan.textContent = resources.dimensionalRift.perSecond.toFixed(1);
        dimensionalRiftCost.textContent = resources.dimensionalRift.conversionCost;
        buyDimensionalRiftButton.disabled = resources.quantumEntanglement.count < resources.dimensionalRift.conversionCost;

        realityAnchorCountSpan.textContent = resources.realityAnchor.count.toFixed(0);
        realityAnchorPerSecondSpan.textContent = resources.realityAnchor.perSecond.toFixed(1);
        realityAnchorCost.textContent = resources.realityAnchor.conversionCost;
        buyRealityAnchorButton.disabled = resources.dimensionalRift.count < resources.realityAnchor.conversionCost;

        // Stage 7
        omniEnergyCountSpan.textContent = resources.omniEnergy.count.toFixed(0);
        omniEnergyPerSecondSpan.textContent = resources.omniEnergy.perSecond.toFixed(1);
        omniEnergyCost.textContent = resources.omniEnergy.conversionCost;
        buyOmniEnergyButton.disabled = resources.realityAnchor.count < resources.omniEnergy.conversionCost;

        primeMoverCountSpan.textContent = resources.primeMover.count.toFixed(0);
        primeMoverPerSecondSpan.textContent = resources.primeMover.perSecond.toFixed(1);
        primeMoverCost.textContent = resources.primeMover.conversionCost;
        buyPrimeMoverButton.disabled = resources.omniEnergy.count < resources.primeMover.conversionCost;

        trueCreatorCountSpan.textContent = resources.trueCreator.count.toFixed(0);
        trueCreatorPerSecondSpan.textContent = resources.trueCreator.perSecond.toFixed(1);
        trueCreatorCost.textContent = resources.trueCreator.conversionCost;
        buyTrueCreatorButton.disabled = resources.primeMover.count < resources.trueCreator.conversionCost;

        // Stage 8
        cosmicSingularityCountSpan.textContent = resources.cosmicSingularity.count.toFixed(0);
        cosmicSingularityPerSecondSpan.textContent = resources.cosmicSingularity.perSecond.toFixed(1);
        cosmicSingularityCost.textContent = resources.cosmicSingularity.conversionCost;
        buyCosmicSingularityButton.disabled = resources.trueCreator.count < resources.cosmicSingularity.conversionCost;

        existentialTruthCountSpan.textContent = resources.existentialTruth.count.toFixed(0);
        existentialTruthPerSecondSpan.textContent = resources.existentialTruth.perSecond.toFixed(1);
        existentialTruthCost.textContent = resources.existentialTruth.conversionCost;
        buyExistentialTruthButton.disabled = resources.cosmicSingularity.count < resources.existentialTruth.conversionCost;

        theUltimateFormCountSpan.textContent = resources.theUltimateForm.count.toFixed(0);
        theUltimateFormPerSecondSpan.textContent = resources.theUltimateForm.perSecond.toFixed(1);
        theUltimateFormCost.textContent = resources.theUltimateForm.conversionCost;
        buyTheUltimateFormButton.disabled = resources.existentialTruth.count < resources.theUltimateForm.conversionCost;

        // Stage 9
        cosmicNexusCountSpan.textContent = resources.cosmicNexus.count.toFixed(0);
        cosmicNexusPerSecondSpan.textContent = resources.cosmicNexus.perSecond.toFixed(1);
        cosmicNexusCost.textContent = resources.cosmicNexus.conversionCost;
        buyCosmicNexusButton.disabled = resources.theUltimateForm.count < resources.cosmicNexus.conversionCost;

        quantumSingularityCountSpan.textContent = resources.quantumSingularity.count.toFixed(0);
        quantumSingularityPerSecondSpan.textContent = resources.quantumSingularity.perSecond.toFixed(1);
        quantumSingularityCost.textContent = resources.quantumSingularity.conversionCost;
        buyQuantumSingularityButton.disabled = resources.cosmicNexus.count < resources.quantumSingularity.conversionCost;

        transcendentEssenceCountSpan.textContent = resources.transcendentEssence.count.toFixed(0);
        transcendentEssencePerSecondSpan.textContent = resources.transcendentEssence.perSecond.toFixed(1);
        transcendentEssenceCost.textContent = resources.transcendentEssence.conversionCost;
        buyTranscendentEssenceButton.disabled = resources.quantumSingularity.count < resources.transcendentEssence.conversionCost;


        // Update TTS status display
        ttsStatusSpan.textContent = resources.textToSpeechEnabled ? 'On' : 'Off';

        // Update time to next resource
        timeToNextResourceSpan.textContent = calculateTimeToNextResource();

        // Update all text content based on current language
        updateTextContent();
        
// your code

var stage3LastResource = document.getElementById('zenithOfCreationPerSecond').textContent;
if(stage3LastResource >0 ){
       document.getElementById("collapsible").style.display = "block";
    //document.getElementById("combatSection").style.display = "block";
}
else {
    document.getElementById("collapsible").style.display = "none";
    document.getElementById("combatSection").style.display = "none";
}

        
       if(resources.language == "vi") {

document.getElementById('collapsible').textContent = "Giao diện chiến đấu";
            

       }
       else {
       document.getElementById('collapsible').textContent = "Combat UI";
            }
    }

    function addWood() {
        let woodEarned = resources.wood.manualClickAmount;
        let isCritical = false;

        if (Math.random() < resources.wood.criticalChance) {
            woodEarned *= resources.wood.criticalMultiplier;
            isCritical = true;
        }

        resources.wood.count += woodEarned;
        updateDisplay();

        if (isCritical) {
            criticalHitTextSpan.textContent = translations[resources.language].criticalHitText(woodEarned.toFixed(0));
            criticalHitFeedbackDiv.style.opacity = 1;
            speakText(translations[resources.language].criticalHitText(woodEarned.toFixed(0)));
        } else {
            criticalHitFeedbackDiv.style.opacity = 0;
        }
    }

    function dismissCriticalFeedback() {
        criticalHitFeedbackDiv.style.opacity = 0;
        criticalHitTextSpan.textContent = '';
    }

    function upgradeChopPower() {
        const cost = resources.wood.upgradeCost;
        if (resources.wood.count >= cost) {
            resources.wood.count -= cost;
            resources.wood.manualClickAmount += resources.wood.upgradeAmount;
            resources.wood.upgradeCost = Math.round(resources.wood.upgradeCost * resources.wood.upgradeMultiplier);
            speakText(translations[resources.language].upgradeChopPowerSuccess);

            updateDisplay();
        //    speakText(translations[resources.language].woodUpgradeAlert(resources.wood.manualClickAmount));
        } else {
            const message = translations[resources.language].woodUpgradeAlert(cost);
            alert(message);
            speakText(message);
        }
    }

    function buyWoodPerSecondAutomation() {
        const cost = resources.wood.automationCost;
        if (resources.wood.count >= cost) {
            resources.wood.count -= cost;
            resources.wood.perSecond += resources.wood.automationAmount;
            resources.wood.automationCost = Math.round(resources.wood.automationCost * resources.wood.automationMultiplier);
            updateDisplay();
            speakText(translations[resources.language].woodAutomationSuccess);
        } else {
            const message = translations[resources.language].woodAutomationAlert(cost);
            alert(message);
            speakText(message);
        }
    }

    // This map defines the prerequisite resource for each craftable resource
    const resourcePrerequisites = {
        'stone': 'wood',
        'iron': 'stone',
        'alloy': 'iron',
        'circuitry': 'alloy',
        'aiCore': 'circuitry',
        'consciousness': 'aiCore',
        'realityShard': 'consciousness',
        'paradox': 'realityShard',
        'singularity': 'paradox',
        'multiverse': 'singularity',
        'omniscience': 'multiverse',
        'genesis': 'omniscience',
        'void': 'genesis',
        'theAll': 'void',
        'transcendence': 'theAll',
        'theAbsolute': 'transcendence',
        'theEnd': 'theAbsolute',
        'theNewBeginning': 'theEnd',
        'theArchitectsWill': 'theNewBeginning',
        'theOmniverse': 'theArchitectsWill',
        'theBoundlessVoid': 'theOmniverse',
        'cosmicFabric': 'theBoundlessVoid',
        'infiniteNexus': 'cosmicFabric',
        'eternalEcho': 'infiniteNexus',
        'zenithOfCreation': 'eternalEcho',
        'universalSingularity': 'zenithOfCreation',
        'existentialFabric': 'universalSingularity',
        'temporalFlux': 'existentialFabric',
        'multidimensionalHarmony': 'temporalFlux',
        'cosmicAwakening': 'multidimensionalHarmony',
        'divineSpark': 'cosmicAwakening',
        'cosmicDust': 'divineSpark',
        'stellarNucleus': 'cosmicDust',
        'galacticCore': 'stellarNucleus',
        'quantumEntanglement': 'galacticCore',
        'dimensionalRift': 'quantumEntanglement',
        'realityAnchor': 'dimensionalRift',
        'omniEnergy': 'realityAnchor',
        'primeMover': 'omniEnergy',
        'trueCreator': 'primeMover',
        'cosmicSingularity': 'trueCreator',
        'existentialTruth': 'cosmicSingularity',
        'theUltimateForm': 'existentialTruth',
        'cosmicNexus': 'theUltimateForm',
        'quantumSingularity': 'cosmicNexus',
        'transcendentEssence': 'quantumSingularity'
    };

    function buyResource(resourceToBuy, previousResource) {
        const cost = resources[resourceToBuy].conversionCost;
        if (resources[previousResource].count >= cost) {
            resources[previousResource].count -= cost;
            resources[resourceToBuy].count += 1;
            resources[resourceToBuy].perSecond += resources[resourceToBuy].perUnitProduction;
            updateDisplay();
            const displayResourceName = translations[resources.language][`${resourceToBuy}Title`]; // Get translated resource name
            speakText(translations[resources.language].buyResourceNotification(displayResourceName));
        } else {
            const previousResourceDisplay = translations[resources.language][`${previousResource}Title`]; // Get translated previous resource name
            const resourceToBuyDisplay = translations[resources.language][`${resourceToBuy}Title`]; // Get translated resource name
            const message = translations[resources.language].notEnoughResource(previousResourceDisplay, resourceToBuyDisplay, cost);
            alert(message);
            speakText(message);
        }
    }

    // Add buyResourceNotification and notEnoughResource to translations
    translations.en.buyResourceNotification = (resourceName) => `You bought 1 ${resourceName}!`;
    translations.en.notEnoughResource = "";
    translations.vi.buyResourceNotification = (resourceName) => `Bạn đã mua 1 ${resourceName}!`;
    translations.vi.notEnoughResource = "";


    function saveGame(integer) {
        try {
            const saveData = {
                resources: resources
            };
            localStorage.setItem('incrementalGameSave', JSON.stringify(saveData));
            if (integer !== 1) {
                const message = translations[resources.language].gameSaved;
                alert(message);
                speakText(message);
            }
        } catch (e) {
            console.error("Lỗi khi lưu game:", e);
            const errorMessage = translations[resources.language].gameLoadError;
            alert(errorMessage);
            speakText(errorMessage);
        }
    }

    function loadGame() {
        try {
            const savedData = localStorage.getItem('incrementalGameSave');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const loadedResources = parsedData.resources;

                // Iterate over the keys in the *initial* resources object to ensure all expected properties are present
                // and then merge the loaded data. This handles new properties added in updates.
                for (const key in resources) {
                    if (loadedResources[key] !== undefined) {
                        if (typeof resources[key] === 'object' && resources[key] !== null &&
                            typeof loadedResources[key] === 'object' && loadedResources[key] !== null) {
                            // Deep merge for nested objects like 'wood' properties
                            Object.assign(resources[key], loadedResources[key]);
                        } else {
                            // Direct assignment for primitive types or if it's not an object
                            resources[key] = loadedResources[key];
                        }
                    }
                }
                // Specifically handle apiKey if it was not in initial resources object
                if (loadedResources.apiKey !== undefined) {
                    resources.apiKey = loadedResources.apiKey;
                }

                updateDisplay();
                const message = translations[resources.language].gameLoadSuccess;
                alert(message);
                speakText(message);
            } else {
                const message = translations[resources.language].gameLoadNoData;
                alert(message);
                speakText(message);
            }
        } catch (e) {
            console.error("Lỗi khi tải game:", e);
            const errorMessage = translations[resources.language].gameLoadError;
            alert(errorMessage);
            speakText(errorMessage);
        }
    }

    let cheatCodeSequence = [];
    const cheatCode = "add10kwood";

    function handleCheatCode(event) {
        cheatCodeSequence.push(event.key.toLowerCase());
        if (cheatCodeSequence.length > cheatCode.length) {
            cheatCodeSequence.shift();
        }

        if (cheatCodeSequence.join('') === cheatCode) {
            resources.wood.count += 10000;
            updateDisplay();
            const message = translations[resources.language].cheatActivated;
            alert(message);
            speakText(message);
            cheatCodeSequence = [];
        }
    }

    const quizQuestions = {
        en: [
            { question: "What is the first resource you collect?", answer: "wood", reward: 500 },
            { question: "What resource comes after Stone?", answer: "iron", reward: 750 },
            { question: "How many Wood do you need to buy 1 Stone?", answer: "1000", reward: 1000 },
            { question: "What is the next resource after Alloy?", answer: "circuitry", reward: 1500 },
            { question: "What material is produced after AI Core?", answer: "consciousness", reward: 2000 },
            { question: "Which resource is obtained after Genesis?", answer: "void", reward: 5000 },
            { question: "How much Wood do you get per second after automating it once?", answer: "5", reward: 1000 },
            { question: "What comes after Singularity?", answer: "multiverse", reward: 2500 },
            { question: "What is the resource after Omniscience?", answer: "genesis", reward: 3000 },
            { question: "What is the final resource after The Absolute?", answer: "the end", reward: 10000 },
            { question: "What is the resource after The End?", answer: "the new beginning", reward: 15000 },
            { question: "What is the resource after The New Beginning?", answer: "the architect's will", reward: 20000 },
            { question: "What comes after The Architect's Will?", answer: "the omniverse", reward: 50000 },
            { question: "What comes after The Omniverse?", answer: "the boundless void", reward: 100000 },
            { question: "What comes after The Boundless Void?", answer: "cosmic fabric", reward: 150000 },
            { question: "What is the second to last resource in Stage 3?", answer: "eternal echo", reward: 200000 },
            { question: "What is the final resource in Stage 3?", answer: "zenith of creation", reward: 250000 },
            { question: "What comes after Zenith of Creation?", answer: "universal singularity", reward: 300000 },
            { question: "What is the resource after Universal Singularity?", answer: "existential fabric", reward: 350000 },
            { question: "What is the resource after Temporal Flux?", answer: "multidimensional harmony", reward: 400000 },
            { question: "What is the ultimate resource of all?", answer: "Transcendent Essence", reward: 500000 }
        ],
        vi: [
            { question: "Tài nguyên đầu tiên bạn thu thập là gì?", answer: "gỗ", reward: 500 },
            { question: "Tài nguyên nào đến sau Đá?", answer: "sắt", reward: 750 },
            { question: "Bạn cần bao nhiêu Gỗ để mua 1 Đá?", answer: "1000", reward: 1000 },
            { question: "Tài nguyên tiếp theo sau Hợp Kim là gì?", answer: "mạch điện", reward: 1500 },
            { question: "Vật liệu nào được sản xuất sau Lõi AI?", answer: "ý thức", reward: 2000 },
            { question: "Tài nguyên nào thu được sau Sáng Thế?", answer: "hư không", reward: 5000 },
            { question: "Bạn nhận được bao nhiêu Gỗ mỗi giây sau khi tự động hóa một lần?", answer: "5", reward: 1000 },
            { question: "Điều gì đến sau Điểm Kỳ Dị?", answer: "đa vũ trụ", reward: 2500 },
            { question: "Tài nguyên sau Toàn Tri là gì?", answer: "sáng thế", reward: 3000 },
            { question: "Tài nguyên cuối cùng sau Tuyệt Đối là gì?", answer: "kết thúc", reward: 10000 },
            { question: "Tài nguyên sau Kết Thúc là gì?", answer: "khởi nguyên mới", reward: 15000 },
            { question: "Tài nguyên sau Khởi Nguyên Mới là gì?", answer: "ý chí kiến trúc sư", reward: 20000 },
            { question: "Điều gì đến sau Ý Chí Kiến Trúc Sư?", answer: "toàn vũ trụ", reward: 50000 },
            { question: "Điều gì đến sau Toàn Vũ Trụ?", answer: "hư không vô tận", reward: 100000 },
            { question: "Điều gì đến sau Hư Không Vô Tận?", answer: "vải vũ trụ", reward: 150000 },
            { question: "Tài nguyên thứ hai từ cuối trong Giai Đoạn 3 là gì?", answer: "tiếng vọng vĩnh hằng", reward: 200000 },
            { question: "Tài nguyên cuối cùng trong Giai Đoạn 3 là gì?", answer: "đỉnh cao sáng tạo", reward: 250000 },
            { question: "Điều gì đến sau Đỉnh Cao Sáng Tạo?", answer: "điểm kỳ dị vũ trụ", reward: 300000 },
            { question: "Tài nguyên sau Điểm Kỳ Dị Vũ Trụ là gì?", answer: "vải tồn tại", reward: 350000 },
            { question: "Tài nguyên sau Dòng Chảy Thời Gian là gì?", answer: "hòa hợp đa chiều", reward: 400000 },
            { question: "Tài nguyên tối thượng của tất cả là gì?", answer: "tinh hoa siêu việt", reward: 500000 }
        ]
    };

    let currentQuestion = null;
    let answeredQuestions = [];
    const QUIZ_COOLDOWN_MS = 5000;
    let quizCooldownTimer = 0;

    function loadNewQuestion() {
        const currentQuizQuestions = quizQuestions[resources.language];
        if (currentQuizQuestions.length === 0) {
            const message = translations[resources.language].quizNoMoreQuestions;
            quizQuestionParagraph.textContent = message;
            quizAnswerInput.disabled = true;
            submitQuizAnswerButton.disabled = true;
            speakText(message);
            return;
        }

        if (answeredQuestions.length === currentQuizQuestions.length) {
            answeredQuestions = []; // Reset if all questions have been asked
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * currentQuizQuestions.length);
        } while (answeredQuestions.includes(randomIndex));

        answeredQuestions.push(randomIndex);
        currentQuestion = currentQuizQuestions[randomIndex];

        quizQuestionParagraph.textContent = currentQuestion.question;
        quizAnswerInput.value = '';
        quizFeedbackParagraph.textContent = '';
        quizAnswerInput.disabled = false;
        submitQuizAnswerButton.disabled = false;
        speakText(currentQuestion.question);
    }

    function checkAnswer() {
        if (!currentQuestion) return;

        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        const correctAnswer = String(currentQuestion.answer).toLowerCase();
        let feedbackMessage;

        if (userAnswer === correctAnswer) {
            resources.wood.count += currentQuestion.reward;
            feedbackMessage = translations[resources.language].quizCorrect(currentQuestion.reward);
            quizFeedbackParagraph.style.color = 'green';
            updateDisplay();
        } else {
            feedbackMessage = translations[resources.language].quizIncorrect(currentQuestion.answer);
            quizFeedbackParagraph.style.color = 'red';
        }

        quizFeedbackParagraph.textContent = feedbackMessage;
        speakText(feedbackMessage);

        quizAnswerInput.disabled = true;
        submitQuizAnswerButton.disabled = true;

        quizCooldownTimer = Date.now();
        setTimeout(() => {
            loadNewQuestion();
        }, QUIZ_COOLDOWN_MS);
    }

    async function generateLore(resourceName, loreDisplayElement) {
        const lang = resources.language;
        loreDisplayElement.textContent = translations[lang].loreGenerating;
        loreDisplayElement.style.color = '#555';
        speakText(translations[lang].loreGenerating);

        try {
            // Adjust prompt based on language
            const prompt = lang === 'en'
                ? `Write a short, imaginative paragraph (around 30-50 words) about the resource "${resourceName}" in an incremental game. Focus on its meaning, how it's used, or the feeling of collecting it in a sci-fi adventure game context.`
                : `Viết một đoạn văn ngắn, giàu trí tưởng tượng (khoảng 30-50 từ) về tài nguyên "${resourceName}" trong một trò chơi incremental. Tập trung vào ý nghĩa, cách nó được sử dụng, hoặc cảm giác khi thu thập nó trong bối cảnh trò chơi phiêu lưu khoa học viễn tưởng.`;

            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });

            const payload = { contents: chatHistory };
            const apiKey = resources.apiKey;

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(translations[lang].loreApiError(response.status, response.statusText, errorData));
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                loreDisplayElement.textContent = text;
                loreDisplayElement.style.color = '#388e3c';
                speakText(text);
            } else {
                const errorMessage = translations[lang].loreResponseError;
                loreDisplayElement.textContent = errorMessage;
                loreDisplayElement.style.color = 'orange';
                speakText(errorMessage);
            }
        } catch (error) {
            console.error("Lỗi khi gọi Gemini API:", error);
            const errorMessage = translations[lang].loreGenericError;
            loreDisplayElement.textContent = errorMessage;
            loreDisplayElement.style.color = 'red';
            speakText(errorMessage);
        }
    }

    function formatTime(ms) {
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        seconds = seconds % 60;
        minutes = minutes % 60;

        const pad = (num) => num < 10 ? '0' + num : num;

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function updateTimePlayed() {
        resources.timePlayed.second += 1;
        if (resources.timePlayed.second === 60) {
            resources.timePlayed.second = 0;
            resources.timePlayed.minute += 1;
        }
        if (resources.timePlayed.minute === 60) {
            resources.timePlayed.minute = 0;
            resources.timePlayed.hour += 1;
        }
        document.getElementById('timePlayed').textContent = resources.timePlayed.hour.toString().padStart(2, '0') + ":" + resources.timePlayed.minute.toString().padStart(2, '0') + ":" + resources.timePlayed.second.toString().padStart(2, '0');
    }

    function notify(type, message) {
        (() => {
            let n = document.createElement("div");
            let id = Math.random().toString(36).substr(2, 10);
            n.setAttribute("id", id);
            n.classList.add("notification", type);
            n.classList.add("fade_out");
            n.innerText = message;
            document.getElementById("notification-area").appendChild(n);
            setTimeout(() => {
                var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
                for (let i = 0; i < notifications.length; i++) {
                    if (notifications[i].getAttribute("id") === id) {
                        notifications[i].remove();
                        break;
                    }
                }
            }, 5000);
        })();

        if (resources.textToSpeechEnabled) {
            speakText(message);
        }
    }

    function speakText(text) {
        if ('speechSynthesis' in window && resources.textToSpeechEnabled) {

           // speechSynthesis.cancel(); // Stop current speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = resources.language === 'en' ? 'en-US' : 'vi-VN';
           if(resources.lastMessage == utterance.text){
          //   speechSynthesis.cancel();
              }
           else {
            speechSynthesis.speak(utterance);
              }
                resources.lastMessage = text;
        }
    }

    function toggleTextToSpeech() {
        resources.textToSpeechEnabled = !resources.textToSpeechEnabled;
        updateDisplay();
        saveGame(1); // Save the TTS setting silently
        if (resources.textToSpeechEnabled) {
            speakText(translations[resources.language].ttsEnabled);
        } else {
            speechSynthesis.cancel(); // Stop any ongoing speech
            notify("info", translations[resources.language].ttsDisabled); // Use notify to show it's disabled
        }
    }

    function toggleLanguage() {
        resources.language = resources.language === 'en' ? 'vi' : 'en';
        updateDisplay(); // This will call updateTextContent()
        updateCombatDisplay();
        loadNewQuestion(); // Reload quiz question in new language
        saveGame(1); // Save the language setting silently
        speakText(resources.language === 'en' ? "Language set to English." : "Ngôn ngữ đã được đặt thành Tiếng Việt.");
    }

    function notifySuccess() {
        notify("success", translations[resources.language].gameSaved);
    }

    function autoSave() {
        saveGame(1);
        notifySuccess();
    }

    function gameLoop() {
        resources.wood.count += resources.wood.perSecond / 10;
        resources.stone.count += resources.stone.perSecond / 10;
        resources.iron.count += resources.iron.perSecond / 10;
        resources.alloy.count += resources.alloy.perSecond / 10;
        resources.circuitry.count += resources.circuitry.perSecond / 10;
        resources.aiCore.count += resources.aiCore.perSecond / 10;
        resources.consciousness.count += resources.consciousness.perSecond / 10;
        resources.realityShard.count += resources.realityShard.perSecond / 10;
        resources.paradox.count += resources.paradox.perSecond / 10;
        resources.singularity.count += resources.singularity.perSecond / 10;
        resources.multiverse.count += resources.multiverse.perSecond / 10;
        resources.omniscience.count += resources.omniscience.perSecond / 10;
        resources.genesis.count += resources.genesis.perSecond / 10;
        resources.void.count += resources.void.perSecond / 10;
        resources.theAll.count += resources.theAll.perSecond / 10;
        resources.transcendence.count += resources.transcendence.perSecond / 10;
        resources.theAbsolute.count += resources.theAbsolute.perSecond / 10;
        resources.theEnd.count += resources.theEnd.perSecond / 10;
        resources.theNewBeginning.count += resources.theNewBeginning.perSecond / 10;
        resources.theArchitectsWill.count += resources.theArchitectsWill.perSecond / 10;
        resources.theOmniverse.count += resources.theOmniverse.perSecond / 10;
        resources.theBoundlessVoid.count += resources.theBoundlessVoid.perSecond / 10;
        resources.cosmicFabric.count += resources.cosmicFabric.perSecond / 10;
        resources.infiniteNexus.count += resources.infiniteNexus.perSecond / 10;
        resources.eternalEcho.count += resources.eternalEcho.perSecond / 10;
        resources.zenithOfCreation.count += resources.zenithOfCreation.perSecond / 10;
        resources.universalSingularity.count += resources.universalSingularity.perSecond / 10;
        resources.existentialFabric.count += resources.existentialFabric.perSecond / 10;
        resources.temporalFlux.count += resources.temporalFlux.perSecond / 10;
        resources.multidimensionalHarmony.count += resources.multidimensionalHarmony.perSecond / 10;
        resources.cosmicAwakening.count += resources.cosmicAwakening.perSecond / 10;
        resources.divineSpark.count += resources.divineSpark.perSecond / 10;
        // Stage 5
        resources.cosmicDust.count += resources.cosmicDust.perSecond / 10;
        resources.stellarNucleus.count += resources.stellarNucleus.perSecond / 10;
        resources.galacticCore.count += resources.galacticCore.perSecond / 10;
        // Stage 6
        resources.quantumEntanglement.count += resources.quantumEntanglement.perSecond / 10;
        resources.dimensionalRift.count += resources.dimensionalRift.perSecond / 10;
        resources.realityAnchor.count += resources.realityAnchor.perSecond / 10;
        // Stage 7
        resources.omniEnergy.count += resources.omniEnergy.perSecond / 10;
        resources.primeMover.count += resources.primeMover.perSecond / 10;
        resources.trueCreator.count += resources.trueCreator.perSecond / 10;
        // Stage 8
        resources.cosmicSingularity.count += resources.cosmicSingularity.perSecond / 10;
        resources.existentialTruth.count += resources.existentialTruth.perSecond / 10;
        resources.theUltimateForm.count += resources.theUltimateForm.perSecond / 10;
        // Stage 9
        resources.cosmicNexus.count += resources.cosmicNexus.perSecond / 10;
        resources.quantumSingularity.count += resources.quantumSingularity.perSecond / 10;
        resources.transcendentEssence.count += resources.transcendentEssence.perSecond / 10;
        if(resources.player.currentHp < resources.player.hp ) { resources.player.currentHp += 1};

        updateDisplay();
        loadCombatInfo();
    }

    // Define the order of resources from earliest to latest
    const resourceOrder = [
        'wood', 'stone', 'iron', 'alloy', 'circuitry', 'aiCore', 'consciousness',
        'realityShard', 'paradox', 'singularity', 'multiverse', 'omniscience',
        'genesis', 'void', 'theAll', 'transcendence', 'theAbsolute', 'theEnd',
        'theNewBeginning', 'theArchitectsWill', 'theOmniverse', 'theBoundlessVoid',
        'cosmicFabric', 'infiniteNexus', 'eternalEcho', 'zenithOfCreation',
        'universalSingularity', 'existentialFabric', 'temporalFlux',
        'multidimensionalHarmony', 'cosmicAwakening', 'divineSpark',
        'cosmicDust', 'stellarNucleus', 'galacticCore',
        'quantumEntanglement', 'dimensionalRift', 'realityAnchor',
        'omniEnergy', 'primeMover', 'trueCreator',
        'cosmicSingularity', 'existentialTruth', 'theUltimateForm',
        'cosmicNexus', 'quantumSingularity', 'transcendentEssence'
    ];

    /**
     * Finds the newest (most advanced) resource that the player currently owns at least 1 unit of.
     * @returns {string|null} The key of the newest owned resource, or null if no resource is owned.
     */
    function findNewestOwnedResource() {
        // Iterate through the resourceOrder array in reverse to find the newest owned resource
        for (let i = resourceOrder.length - 1; i >= 0; i--) {
            const resourceKey = resourceOrder[i];
            if (resources[resourceKey] && resources[resourceKey].count >= 1) {
                return resourceKey;
            }
        }
        return null; // Return null if no resource is owned
    }

    /**
     * Calculates the time remaining to acquire the next unowned resource.
     * @returns {string} A formatted string indicating the time, or a message if all resources are owned/production is zero.
     */
    function calculateTimeToNextResource() {
        const lang = resources.language;
        for (let i = 0; i < resourceOrder.length; i++) {
            const currentResourceKey = resourceOrder[i];
            const currentResource = resources[currentResourceKey];

            // Skip if this is wood, or if the player already has at least one of this resource
            if (currentResourceKey === 'wood' || currentResource.count >= 1) {
                continue;
            }

            const prerequisiteResourceKey = resourcePrerequisites[currentResourceKey];
            if (!prerequisiteResourceKey) {
                // This should not happen if resourcePrerequisites is correctly mapped
                console.error(`No prerequisite found for ${currentResourceKey}`);
                continue;
            }

            const prerequisiteResource = resources[prerequisiteResourceKey];
            const cost = currentResource.conversionCost;

            if (prerequisiteResource.perSecond <= 0) {
                // Cannot automate, needs manual clicks or more automation for prerequisite
                return translations[lang].timeToNextResourceValue(`N/A (${translations[lang][`${prerequisiteResourceKey}Title`]} production is 0)`);
            }

            const needed = cost - prerequisiteResource.count;
            if (needed <= 0) {
                // Player already has enough prerequisite resource to buy this, move to next
                continue;
            }

            const secondsRemaining = needed / prerequisiteResource.perSecond;

            const SECONDS_IN_MINUTE = 60;
            const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
            const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
            const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30; // Approximation
            const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365; // Approximation

            let years = Math.floor(secondsRemaining / SECONDS_IN_YEAR);
            let remainingSeconds = secondsRemaining % SECONDS_IN_YEAR;
            let months = Math.floor(remainingSeconds / SECONDS_IN_MONTH);
            remainingSeconds %= SECONDS_IN_MONTH;
            let days = Math.floor(remainingSeconds / SECONDS_IN_DAY);
            remainingSeconds %= SECONDS_IN_DAY;
            let hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
            remainingSeconds %= SECONDS_IN_HOUR;
            let minutes = Math.floor(remainingSeconds / SECONDS_IN_MINUTE);
            remainingSeconds %= SECONDS_IN_MINUTE;
            let seconds = Math.floor(remainingSeconds);

            let timeString = [];
            if (years > 0) timeString.push(`${years}y`);
            if (months > 0) timeString.push(`${months}mo`);
            if (days > 0) timeString.push(`${days}d`);
            if (hours > 0) timeString.push(`${hours}h`);
            if (minutes > 0) timeString.push(`${minutes}m`);
            if (seconds > 0 || timeString.length === 0) timeString.push(`${seconds}s`); // Always show seconds if nothing else, or if it's 0 seconds

            return translations[lang].timeToNextResourceValue(timeString.join(' '));
        }

        return translations[lang].timeToNextResourceNone; // All resources acquired
    }


    // --- Star Clicker Feature Initialization ---
    const clickableStar = document.getElementById('clickableStar');
    let starSpawnIntervalId; // To store the interval ID for spawning stars
    let starTimeoutId; // To store the timeout ID for hiding the star

    const STAR_SPAWN_DURATION = 30 * 1000; // 30 seconds
    const STAR_DISPLAY_DURATION = 5 * 1000; // Increased to 100 seconds

    function spawnStar() {
      //  console.log('Spawning star (new cycle). Current interval ID:', starSpawnIntervalId);
        // Ensure previous star is hidden if it wasn't clicked
      //  console.log('  Calling hideStar() from spawnStar() to clear previous star.');
        hideStar();

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get star dimensions (approximate, or measure if needed)
        const starWidth = clickableStar.offsetWidth || 64;
        const starHeight = clickableStar.offsetHeight || 64;

        // Calculate max coordinates to keep star fully within viewport
        const maxX = viewportWidth - starWidth;
        const maxY = viewportHeight - starHeight;

        // Ensure it's not too close to the edges where UI elements might be
        const padding = 100; // Example padding to avoid main UI areas
        const randomX = Math.random() * (maxX - 2 * padding) + padding;
        const randomY = Math.random() * (maxY - 2 * padding) + padding;


        clickableStar.style.left = `${randomX}px`;
        clickableStar.style.top = `${randomY}px`;
        clickableStar.style.display = 'block';
        clickableStar.style.opacity = '1';
      //  console.log(`Star spawned at: top=${randomY}px, left=${randomX}px`);

        // Set a timeout to hide the star if not clicked within STAR_DISPLAY_DURATION
   //     console.log(`  Setting timeout to hide star in ${STAR_DISPLAY_DURATION / 1000} seconds.`);
        starTimeoutId = setTimeout(hideStar, STAR_DISPLAY_DURATION);
    }

    function hideStar() {
       // console.log('Hiding star function called.');
        if (starTimeoutId) {
           // console.log('  Clearing existing starTimeoutId:', starTimeoutId);
            clearTimeout(starTimeoutId); // Clear any pending hide timeout
            starTimeoutId = null; // Set to null after clearing
        }
        clickableStar.style.opacity = '0';
        // Use a small delay for display: none to allow transition to complete
        setTimeout(() => {
            clickableStar.style.display = 'none';
           // console.log('  Star display set to none after transition.');
        }, 5000); // Match CSS transition duration
    }

    /**
     * Hides the star immediately after a click, with a shorter transition.
     */
    function hideStarOnClick() {
    //    console.log('hideStarOnClick function called.');
        if (starTimeoutId) {
           // console.log('  Clearing existing starTimeoutId from hideStarOnClick:', starTimeoutId);
            clearTimeout(starTimeoutId); // Clear any pending hide timeout
            starTimeoutId = null;
        }
        clickableStar.style.opacity = '0';
        // Use a shorter delay for display: none for immediate click feedback
        setTimeout(() => {
            clickableStar.style.display = 'none';
          //  console.log('  Star display set to none after click transition (500ms).');
        }, 500); // Shorter duration for click
    }


    function handleStarClick() {
   //     console.log('Star clicked! (User interaction)');
        const newestResourceKey = findNewestOwnedResource();
        // Default to 'wood' if no resources are owned yet
        const resourceToAwardKey = newestResourceKey || 'wood';
        const resourceToAward = resources[resourceToAwardKey];

        if (!resourceToAward) {
            console.error(`Error: Resource '${resourceToAwardKey}' not found in resources object.`);
            notify("error", translations[resources.language].starClickedNotificationError); // Add error translation
            hideStarOnClick();
            return;
        }

      //  console.log(`  Before click: ${resourceToAwardKey} count: ${resourceToAward.count}, perSecond: ${resourceToAward.perSecond}`);

        resourceToAward.count += 1; // Add 1 to the count
        resourceToAward.perSecond += 0.1; // Add 0.1 to perSecond

        // Format the resource name for display (e.g., 'divineSpark' -> 'Divine Spark')
        const displayResourceName = translations[resources.language][`${resourceToAwardKey}Title`]; // Get translated resource name
        notify("success", translations[resources.language].starClickedNotification(displayResourceName));
       // console.log('  Calling hideStarOnClick() from handleStarClick().');
        hideStarOnClick(); // Hide the star immediately on click with shorter timeout
        updateDisplay();
        saveGame(1); // Call saveGame with 1 to prevent the alert
    //    console.log(`  After click: ${resourceToAwardKey} count: ${resourceToAward.count}, perSecond: ${resourceToAward.perSecond}`);
    }

    clickableStar.addEventListener('click', handleStarClick);
    document.addEventListener('keydown', (event) => {

        if(event.key === 's') {

            // do the thing you're wanting to do
        ttsToggleBtn.click();

        }
       else if(event.key === 'l') {

            // do the thing you're wanting to do
    languageToggleBtn.click();
        }


    });

// --- Combat System Integration (Paste these sections into your script.js) ---

// 1. Paste this block at the top of your `game` IIFE, alongside your `resources` object.
//    Ensure the 'stage' property is added to ALL your resources in the `resources` object
//    as described in the previous comments (e.g., wood: { ..., stage: 1 }).

// Skill Point Conversion Rates per Stage
const SKILL_POINT_RATES = {
    1: 0.000001, // 1e-6 for Stage 1 resources
    2: 0.00001,  // 1e-5 for Stage 2 resources
    3: 0.0001,   // 1e-4 for Stage 3 resources
    4: 0.001,    // 1e-3 for Stage 4 resources (assuming similar progression)
    5: 0.01,     // 1e-2 for Stage 5 resources
    6: 0.1,      // 1e-1 for Stage 6 resources
    7: 1,        // 1 for Stage 7 resources
    8: 10,       // 10 for Stage 8 resources
    9: 100       // 100 for Stage 9 resources
};

// Combat-related resources and stats
let combatResources = {
    skillPoints: 0,
    atk: 1,
    def: 1,
    hp: 100,
    currentHp: 100, // Current health during combat
    monstersDefeated: 0,
    currentMonster: null // The monster currently being fought
};

// Monster definitions
const monsters = [
    { name: "Basic Slime", vietName: "Quái Nhầy Cơ Bản", atk: 5, def: 1, hp: 50, reward: { wood: 1000, skillPoints: 0.1 } },
    { name: "Forest Goblin", vietName: "Goblin Rừng", atk: 10, def: 5, hp: 80, reward: { wood: 2000, skillPoints: 0.2 } },
    { name: "Cave Troll", vietName: "Quỷ Hang Động", atk: 20, def: 10, hp: 150, reward: { stone: 500, skillPoints: 0.5 } },
    { name: "Iron Golem", vietName: "Người Đá Sắt", atk: 30, def: 20, hp: 250, reward: { iron: 200, skillPoints: 0.8 } },
    { name: "Shadow Beast", vietName: "Quái Vật Bóng Tối", atk: 50, def: 30, hp: 400, reward: { alloy: 100, skillPoints: 1.2 } },
    { name: "Void Lurker", vietName: "Kẻ Ẩn Nấp Hư Không", atk: 75, def: 50, hp: 600, reward: { circuitry: 50, skillPoints: 1.5 } },
    { name: "Cosmic Horror", vietName: "Nỗi Kinh Hoàng Vũ Trụ", atk: 100, def: 75, hp: 1000, reward: { aiCore: 20, skillPoints: 2 } },
    { name: "Reality Bender", vietName: "Kẻ Bẻ Cong Thực Tại", atk: 150, def: 100, hp: 1500, reward: { realityShard: 10, skillPoints: 3 } },
    { name: "Paradox Anomaly", vietName: "Dị Thường Nghịch Lý", atk: 200, def: 150, hp: 2500, reward: { paradox: 5, skillPoints: 4 } },
    { name: "Singularity Guardian", vietName: "Người Gác Cổng Điểm Kì Dị", atk: 300, def: 200, hp: 4000, reward: { singularity: 2, skillPoints: 5 } }, // Index 9
    // --- Rebalanced Rewards (Stage 2 to 4) for Monsters from Index 10 onwards ---
    { name: "Quantum Lurker", vietName: "Kẻ Ẩn Nấp Lượng Tử", atk: 350, def: 250, hp: 5500, reward: { theAll: 1, skillPoints: 6 } }, // Index 10 (Stage 2)
    { name: "Galactic Devourer", vietName: "Kẻ Nuốt Chửng Thiên Hà", atk: 400, def: 300, hp: 7000, reward: { transcendence: 1, skillPoints: 7 } }, // Index 11 (Stage 2)
    { name: "Celestial Watcher", vietName: "Người Canh Gác Thiên Thể", atk: 450, def: 350, hp: 8500, reward: { theAbsolute: 1, skillPoints: 8 } }, // Index 12 (Stage 2)
    { name: "Chronal Abomination", vietName: "Quái Vật Thời Gian", atk: 500, def: 400, hp: 10000, reward: { theEnd: 1, skillPoints: 9 } }, // Index 13 (Stage 2)
    { name: "Dimensional Weaver", vietName: "Kẻ Dệt Không Gian", atk: 550, def: 450, hp: 12000, reward: { theNewBeginning: 1, skillPoints: 10 } }, // Index 14 (Stage 2)
    { name: "Eldritch Entity", vietName: "Thực Thể Cổ Xưa", atk: 600, def: 500, hp: 14000, reward: { theArchitectsWill: 1, skillPoints: 11 } }, // Index 15 (Stage 2)
    { name: "Void Dragon", vietName: "Rồng Hư Không", atk: 700, def: 600, hp: 17000, reward: { theOmniverse: 1, skillPoints: 12 } }, // Index 16 (Stage 2)
    { name: "Primeval Horror", vietName: "Nỗi Kinh Hoàng Nguyên Thủy", atk: 800, def: 700, hp: 20000, reward: { theBoundlessVoid: 1, skillPoints: 13 } }, // Index 17 (Stage 3)
    { name: "Apex Creator", vietName: "Đấng Sáng Tạo Tối Cao", atk: 900, def: 800, hp: 25000, reward: { cosmicFabric: 1, skillPoints: 14 } }, // Index 18 (Stage 3)
    { name: "Cosmic Anomaly", vietName: "Dị Thường Vũ Trụ", atk: 1000, def: 900, hp: 30000, reward: { infiniteNexus: 1, skillPoints: 15 } }, // Index 19 (Stage 3)
    // --- Next 10 Monsters (Indices 20-29) - Continuing Stage 3 and 4 ---
    { name: "Grand Architect", vietName: "Kiến Trúc Sư Vĩ Đại", atk: 2000, def: 1800, hp: 75000, reward: { eternalEcho: 2, skillPoints: 16 } }, // Index 20 (Stage 3)
    { name: "Eternal Dreamer", vietName: "Kẻ Mơ Mộng Vĩnh Hằng", atk: 4000, def: 3600, hp: 187500, reward: { zenithOfCreation: 2, skillPoints: 17 } }, // Index 21 (Stage 3)
    { name: "Time Lord", vietName: "Chúa Tể Thời Gian", atk: 8000, def: 7200, hp: 468750, reward: { universalSingularity: 3, skillPoints: 18 } }, // Index 22 (Stage 4)
    { name: "Dimensional Conqueror", vietName: "Kẻ Chinh Phục Chiều Không Gian", atk: 16000, def: 14400, hp: 1171875, reward: { existentialFabric: 3, skillPoints: 19 } }, // Index 23 (Stage 4)
    { name: "Cosmic Harbinger", vietName: "Điềm Báo Vũ Trụ", atk: 32000, def: 28800, hp: 2929688, reward: { temporalFlux: 3, skillPoints: 20 } }, // Index 24 (Stage 4)
    { name: "Divine Judge", vietName: "Thẩm Phán Thần Thánh", atk: 64000, def: 57600, hp: 7324219, reward: { multidimensionalHarmony: 4, skillPoints: 21 } }, // Index 25 (Stage 4)
    { name: "Omniscient Weaver", vietName: "Kẻ Dệt Vạn Năng", atk: 128000, def: 115200, hp: 18310547, reward: { cosmicAwakening: 4, skillPoints: 22 } }, // Index 26 (Stage 4)
    { name: "Genesis Bringer", vietName: "Người Mang Đến Khởi Nguyên", atk: 256000, def: 230400, hp: 45776367, reward: { divineSpark: 4, skillPoints: 23 } }, // Index 27 (Stage 4)
    // --- Last 2 monsters rewarding Stage 5 ---
    { name: "Void Incarnate", vietName: "Hư Không Giáng Thế", atk: 512000, def: 460800, hp: 114440918, reward: { cosmicDust: 1, skillPoints: 24 } }, // Index 28 (Stage 5)
    { name: "The Absolute Zero", vietName: "Tuyệt Đối Linh", atk: 1024000, def: 921600, hp: 286102295, reward: { stellarNucleus: 1, skillPoints: 25 } } // Index 29 (Stage 5)
];
// Define the cost for upgrading stats
const STAT_UPGRADE_COST = 1; // 1 skill point per stat upgrade

// 2. Paste these DOM element references alongside your other `const` UI element declarations.
const skillPointsCountSpan = document.getElementById('skillPointsCount');
const playerAtkSpan = document.getElementById('playerAtk');
const playerDefSpan = document.getElementById('playerDef');
const playerHpSpan = document.getElementById('playerHp');
const convertZenithToSkillPointBtn = document.getElementById('convertZenithToSkillPoint');
const upgradeAtkBtn = document.getElementById('upgradeAtkBtn');
const upgradeDefBtn = document.getElementById('upgradeDefBtn');
const upgradeHpBtn = document.getElementById('upgradeHpBtn');
const currentMonsterNameSpan = document.getElementById('currentMonsterName');
const monsterHpSpan = document.getElementById('monsterHp');
const fightMonsterBtn = document.getElementById('fightMonsterBtn');
const combatLogParagraph = document.getElementById('combatLog');

// 3. Paste these combat-specific translations into your main `translations` object (e.g., within `translations.en` and `translations.vi`).
//    Make sure to merge them, not overwrite the existing translations.
const combatTranslations = {
    en: {
        combatSkillsTitle: "Combat & Skills",
        combatSkillsDescription: "Convert all accumulated resources into Skill Points to enhance your combat abilities and fight monsters!",
        skillPointsLabel: "Skill Points",
        convertBtnText: "Convert All Resources to Skill Points",
        playerStatsTitle: "Your Stats",
        atkLabel: "Attack",
        defLabel: "Defense",
        hpLabel: "Health",
        upgradeBtnText: (cost) => `Upgrade (Cost: ${cost} SP)`,
        monsterCombatTitle: "Monster Combat",
        currentMonsterLabel: "Current Monster",
        monsterHpLabel: "Monster HP",
        fightMonsterBtn: "Fight Monster",
        skillPointConversionSuccess: (sp) => `Successfully converted resources! Gained ${sp.toFixed(2)} Skill Points.`,
        notEnoughSkillPoints: (cost) => `Not enough Skill Points! You need ${cost} SP.`,
        statUpgradeSuccess: (stat) => `Successfully upgraded ${stat}!`,
        noMonsterToFight: "No monster to fight. Generate a new one!",
        monsterEncounter: (monsterName) => `You encounter a ${monsterName}!`,
        playerAttack: (playerAtk, monsterName, damage) => `You attack the ${monsterName} for ${damage} damage!`,
        monsterAttack: (monsterName, monsterAtk, playerDamage) => `The ${monsterName} attacks you for ${playerDamage} damage!`,
        playerDefeatedMonster: (monsterName) => `You defeated the ${monsterName}!`,
        playerLostFight: (monsterName) => `You were defeated by the ${monsterName}.`,
        fightReward: (rewardText) => `You gained: ${rewardText}.`,
        newMonsterSpawned: (monsterName) => `A new monster, ${monsterName}, has appeared!`,
        noMoreMonsters: "You have defeated all known monsters! More will appear later.",
        playerHealthLow: (hp) => `Your health is low (0 HP). Consider upgrading HP or healing before fighting!`,
        fightInProgress: "A fight is already in progress!",
        fightStart: "Fight started!",
        fightEnd: "Round ended.",
fightMonsterLabel: "Fight Monster"

    },
    vi: {
        combatSkillsTitle: "Chiến Đấu & Kỹ Năng",
        combatSkillsDescription: "Chuyển đổi tất cả tài nguyên tích lũy thành Điểm Kỹ Năng để tăng cường khả năng chiến đấu và chiến đấu với quái vật!",
        skillPointsLabel: "Điểm Kỹ Năng",
        convertBtnText: "Chuyển đổi Tất Cả Tài Nguyên thành Điểm Kỹ Năng",
        playerStatsTitle: "Chỉ Số Của Bạn",
        atkLabel: "Tấn Công",
        defLabel: "Phòng Thủ",
        hpLabel: "Máu",
        upgradeBtnText: (cost) => `Nâng Cấp (Chi Phí: ${cost} ĐKN)`,
        monsterCombatTitle: "Chiến Đấu Quái Vật",
        currentMonsterLabel: "Quái Vật Hiện Tại",
        monsterHpLabel: "Máu Quái Vật",
        fightMonsterBtn: "Chiến Đấu",
        skillPointConversionSuccess: (sp) => `Chuyển đổi tài nguyên thành công! Nhận được ${sp.toFixed(2)} Điểm Kỹ Năng.`,
        notEnoughSkillPoints: (cost) => `Không đủ Điểm Kỹ Năng! Bạn cần ${cost} ĐKN.`,
        statUpgradeSuccess: (stat) => `Nâng cấp ${stat} thành công!`,
        noMonsterToFight: "Không có quái vật để chiến đấu. Tạo một con mới!",
        monsterEncounter: (monsterName) => `Bạn gặp một ${monsterName}!`,
        playerAttack: (playerAtk, monsterName, damage) => `Bạn tấn công ${monsterName} gây ${damage} sát thương!`,
        monsterAttack: (monsterName, monsterAtk, playerDamage) => `${monsterName} tấn công bạn gây ${playerDamage} sát thương!`,
        playerDefeatedMonster: (monsterName) => `Bạn đã đánh bại ${monsterName}!`,
        playerLostFight: (monsterName) => `Bạn đã bị ${monsterName} đánh bại.`,
        fightReward: (rewardText) => `Bạn nhận được: ${rewardText}.`,
        newMonsterSpawned: (monsterName) => `Một quái vật mới, ${monsterName}, đã xuất hiện!`,
        noMoreMonsters: "Bạn đã đánh bại tất cả quái vật đã biết! Sẽ có thêm sau.",
        playerHealthLow: (hp) => `Máu của bạn thấp (zero HP). Hãy cân nhắc nâng cấp HP hoặc hồi máu trước khi chiến đấu!`,
        fightStart: "Một trận chiến đang diễn ra!",
        fightEnd: "Kết thúc lượt thi đấu.",
fightMonsterLabel: "Đánh quái vật"
    }
};

// 4. Paste these functions into your `game` IIFE, alongside other game logic functions.

/**
 * Helper function to get translated text. Uses the main `translations` object.
 */
function getCombatTranslation(key, ...args) {
    const lang = resources.language || 'en'; // Default to English
    let text = combatTranslations[lang][key]; // Use combatTranslations
    if (typeof text === 'function') {
        return text(...args);
    }
    return text;
}


function loadCombatInfo() {
 
  skillPointsCountSpan.textContent = resources.player.sp.toFixed(2); // Show decimals for SP
    document.getElementById("playerAtk").textContent = resources.player.atk;
    playerDefSpan.textContent = resources.player.def;
    playerHpSpan.textContent = resources.player.currentHp.toFixed(0) + '/' + resources.player.hp;
  

}
/**
 * Updates the display of combat-related stats.
 */
function updateCombatDisplay() {

  //your code
    combatResources.skillPoints = resources.player.sp; // Show decimals for SP
    combatResources.atk = resources.player.atk;
    combatResources.def = resources.player.def;
    combatResources.currentHp = resources.player.currentHp;
    combatResources.hp = resources.player.hp;
  

   //
    skillPointsCountSpan.textContent = combatResources.skillPoints.toFixed(2); // Show decimals for SP
    playerAtkSpan.textContent = combatResources.atk.toFixed(0);
    playerDefSpan.textContent = combatResources.def.toFixed(0);
    playerHpSpan.textContent = combatResources.currentHp.toFixed(0) + '/' + combatResources.hp.toFixed(0);

 

    // Update button texts and disable states
    convertZenithToSkillPointBtn.textContent = getCombatTranslation('convertBtnText');
    convertZenithToSkillPointBtn.disabled = false; // Always enabled as it converts *all* resources

    upgradeAtkBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeAtkBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    upgradeDefBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeDefBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    upgradeHpBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeHpBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    if (combatResources.currentMonster) {

        //your code
        if(resources.language == "vi"){
        currentMonsterNameSpan.textContent = combatResources.currentMonster.vietName;
        }
        else {
        currentMonsterNameSpan.textContent = combatResources.currentMonster.name;
        }
        monsterHpSpan.textContent = combatResources.currentMonster.currentHp.toFixed(0) + '/' + combatResources.currentMonster.hp.toFixed(0);
        fightMonsterBtn.textContent = getCombatTranslation('fightMonsterBtn');
    } else {
        currentMonsterNameSpan.textContent = getCombatTranslation('noMonsterToFight');
        monsterHpSpan.textContent = "N/A";
        document.getElementById('enemyHealth').style.width = "100%";
        fightMonsterBtn.textContent = "Spawn Monster"; // Change button text to spawn
    }

    // Update combat section titles and descriptions
    document.getElementById('combatSkillsTitle').textContent = getCombatTranslation('combatSkillsTitle');
    document.getElementById('combatSkillsDescription').textContent = getCombatTranslation('combatSkillsDescription');
    document.getElementById('skillPointsLabel').textContent = getCombatTranslation('skillPointsLabel');
    document.getElementById('playerStatsTitle').textContent = getCombatTranslation('playerStatsTitle');
    document.getElementById('atkLabel').textContent = getCombatTranslation('atkLabel');
    document.getElementById('defLabel').textContent = getCombatTranslation('defLabel');
    document.getElementById('hpLabel').textContent = getCombatTranslation('hpLabel');
    document.getElementById('monsterCombatTitle').textContent = getCombatTranslation('monsterCombatTitle');
    document.getElementById('currentMonsterLabel').textContent = getCombatTranslation('currentMonsterLabel');
    document.getElementById('monsterHpLabel').textContent = getCombatTranslation('monsterHpLabel');
    document.getElementById('fightMonsterBtn').textContent = getCombatTranslation('fightMonsterLabel');
 //   document.getElementById('health').value =  resources.player.hp;
   // document.getElementById('health').max = resources.player.hpmax;
}

/**
 * Converts all accumulated resources into skill points based on their stage.
 */
function convertResourceToSkillPoint() {
    let totalSkillPointsGained = 0;
    // Iterate through the predefined resource order to ensure all relevant resources are checked
    for (const resourceName of resourceOrder) { // Use resourceOrder from script.js
        const resource = resources[resourceName]; // Directly access resources
        if (resource && resource.count !== undefined && resource.stage !== undefined && SKILL_POINT_RATES[resource.stage]) {
            const skillPointsFromResource = resource.count * SKILL_POINT_RATES[resource.stage];
            totalSkillPointsGained += skillPointsFromResource;
            resources[resourceName].count = 0; // Reset resource count after conversion
        }
    }

    if (totalSkillPointsGained > 0) {
        combatResources.skillPoints += totalSkillPointsGained;

        //your code
        if(resources.player.spflag == false)
        {
        resources.player.sp += combatResources.skillPoints;
        resources.player.spflag = true;
    
        }
        else
        {
            resources.player.sp += totalSkillPointsGained;

        }


        //
        notify("success", getCombatTranslation('skillPointConversionSuccess', totalSkillPointsGained)); // Use direct notify
        saveGame(1); // Save silently
        updateCombatDisplay();
        updateDisplay(); // Update main game display for resource count changes
    } else {
        notify("info", "No resources to convert or resources have no defined stage for skill points."); // Use direct notify
    }
}

/**
 * Upgrades a player stat (ATK, DEF, HP).
 * @param {string} statType - 'atk', 'def', or 'hp'.
 */
function upgradeStat(statType) {
    if (combatResources.skillPoints >= STAT_UPGRADE_COST) {
        combatResources.skillPoints -= STAT_UPGRADE_COST;
        resources.player.sp -= STAT_UPGRADE_COST;
        if (statType === 'atk') {
            combatResources.atk += 1; // Increase ATK by 1
        } else if (statType === 'def') {
            combatResources.def += 1; // Increase DEF by 1
        } else if (statType === 'hp') {
            combatResources.hp += 10; // Increase max HP by 10
            combatResources.currentHp += 10; // Also heal current HP
            // your code
            document.getElementById('health').max = combatResources.hp;
              document.getElementById('health').value = combatResources.currentHp;

           //
        }
        resources.player.atk = combatResources.atk;
 resources.player.def = combatResources.def;
 resources.player.hp = combatResources.hp;
 resources.player.currentHp = combatResources.currentHp;
// resources.player.sp = combatResources.sp;
  document.getElementById('skillPointsCount').textContent = combatResources.sp;
        notify("success", getCombatTranslation('statUpgradeSuccess', getCombatTranslation(statType + 'Label'))); // Use direct notify
        saveGame(1); // Save silently
        updateCombatDisplay();
    } else {
        notify("error", getCombatTranslation('notEnoughSkillPoints', STAT_UPGRADE_COST)); // Use direct notify
    }
}

/**
 * Spawns a new random monster based on monsters defeated.
 */
function spawnMonster() {
    if (combatResources.currentMonster) {
        notify("info", getCombatTranslation('fightInProgress')); // Use direct notify
        return;
    }

    const availableMonsters = monsters.filter((_, index) => index <= combatResources.monstersDefeated);
    if (availableMonsters.length === 0) {
        notify("info", getCombatTranslation('noMoreMonsters')); // Use direct notify
        return;
    }

    const monsterIndex = Math.floor(Math.random() * availableMonsters.length);
    const newMonster = JSON.parse(JSON.stringify(availableMonsters[monsterIndex])); // Deep copy monster object
    newMonster.currentHp = newMonster.hp; // Initialize current HP for the monster

    combatResources.currentMonster = newMonster;
   
    if(resources.language == "vi") {
 combatLogParagraph.textContent = getCombatTranslation('monsterEncounter', newMonster.vietName);
        notify("info", getCombatTranslation('newMonsterSpawned', newMonster.vietName)); //
    }
    else{
 combatLogParagraph.textContent = getCombatTranslation('monsterEncounter', newMonster.name);
    notify("info", getCombatTranslation('newMonsterSpawned', newMonster.name)); // Use direct notify
    }    
    updateCombatDisplay();
}

/**
 * Simulates a fight turn by turn.
 */
function fightMonster() {

    if(resources.player.currentHp <=0) {  notify("error", getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0))); // Use direct notify
        combatLogParagraph.textContent = getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0)); return;}
    if (!combatResources.currentMonster) {
        spawnMonster();
   //yourcode
     document.getElementById('enemyHealth').style.width = (combatResources.currentMonster.currentHp / combatResources.currentMonster.hp * 100).toString() + "%";
    //


        return;
    }

    if (combatResources.currentHp <= 0) {
        notify("error", getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0))); // Use direct notify
        combatLogParagraph.textContent = getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0));
      //yourcode
     document.getElementById('enemyHealth').style.width = (combatResources.currentMonster.currentHp / combatResources.currentMonster.hp * 100).toString() + "%";
    //

        return;
    }

    let log = getCombatTranslation('fightStart') + '\n';

    // Player attacks monster
    let playerDamage = Math.max(0, combatResources.atk - combatResources.currentMonster.def);
    combatResources.currentMonster.currentHp -= playerDamage;
    if (resources.language == "vi") {
 log += getCombatTranslation('playerAttack', combatResources.atk, combatResources.currentMonster.vietName, playerDamage) + '\n';
     }
 else {
    log += getCombatTranslation('playerAttack', combatResources.atk, combatResources.currentMonster.name, playerDamage) + '\n';
      }
    //yourcode
     document.getElementById('enemyHealth').style.width = (combatResources.currentMonster.currentHp / combatResources.currentMonster.hp * 100).toString() + "%";
    //

    if (combatResources.currentMonster.currentHp <= 0) {
        // Monster defeated
        if (resources.language == "vi")
        {
log += getCombatTranslation('playerDefeatedMonster', combatResources.currentMonster.vietName) + '\n';
        }
        else {
               log += getCombatTranslation('playerDefeatedMonster', combatResources.currentMonster.name) + '\n';
        }
        handleFightWin(combatResources.currentMonster);
        combatResources.currentMonster = null; // Clear monster
        combatResources.monstersDefeated++; // Increment defeated count
        spawnMonster(); // Spawn a new monster
           //yourcode
     document.getElementById('enemyHealth').style.width = (combatResources.currentMonster.currentHp / combatResources.currentMonster.hp * 100).toString() + "%";
    //

    } else {
        
        // Monster attacks player
        let monsterDamage = Math.max(0, combatResources.currentMonster.atk - combatResources.def);
        combatResources.currentHp -= monsterDamage;
        resources.player.currentHp -= monsterDamage;
        // your code
            document.getElementById('health').max = combatResources.hp;

        document.getElementById('health').value = combatResources.currentHp;
          document.getElementById('playerHp').textContent = combatResources.currentHp.toString() + "/" + combatResources.hp.toString();

       if (resources.language == "vi") {
 log += getCombatTranslation('monsterAttack', combatResources.currentMonster.vietName, combatResources.currentMonster.atk, monsterDamage) + '\n'; 


}
      
else { 
 log += getCombatTranslation('monsterAttack', combatResources.currentMonster.name, combatResources.currentMonster.atk, monsterDamage) + '\n'; 

          }

        if (combatResources.currentHp <= 0) {
            // Player defeated
            log += getCombatTranslation('playerLostFight', combatResources.currentMonster.name) + '\n';
            handleFightLoss();
            combatResources.currentMonster = null; // Clear monster
            // your code
        //document.getElementById('health').value = combatResources.currentHp;
document.getElementById('health').value = resources.player.currentHp;

        //

        }
    }

    log += getCombatTranslation('fightEnd');
    combatLogParagraph.textContent = log;
    saveGame(1); // Save silently after each turn/fight outcome
    updateCombatDisplay();
}



function hideCombatUI(){ document.getElementById("combatSection").style.display = "none";}
function showCombatUI(){ document.getElementById("combatSection").style.display = "block";}
function showAndHideCombatUI()
{
   if(document.getElementById("combatSection").style.display == "block"){
document.getElementById("combatSection").style.display = "none";
      }
   else {    updateCombatDisplay();

document.getElementById("combatSection").style.display = "block";
}
}





/**
 * Handles actions after winning a fight.
 * @param {object} defeatedMonster - The monster that was defeated.
 */
function handleFightWin(defeatedMonster) {
    let rewardText = [];
    for (const resType in defeatedMonster.reward) {
        const amount = defeatedMonster.reward[resType];
        if (resType === 'skillPoints') {
            combatResources.skillPoints += amount;
            rewardText.push(`${amount.toFixed(1)} ${getCombatTranslation('skillPointsLabel')}`);
        } else {
            // Directly add reward to the main game's resources
            if (resources[resType]) {
                resources[resType].count += amount;
                // Get translated resource name from main game's translations
                const displayResName = translations[resources.language][`${resType}Title`] || resType;
                rewardText.push(`${amount.toFixed(1)} ${displayResName}`);
            }
        }
    }
    notify("success", getCombatTranslation('fightReward', rewardText.join(', '))); // Use direct notify
    updateDisplay(); // Update main game resource display
}

/**
 * Handles actions after losing a fight.
 */
function handleFightLoss() {
    if(resources.language == "vi")
     {
    notify("error", getCombatTranslation('playerLostFight', combatResources.currentMonster.vietName)); // Use direct notify
    }
    else {
 notify("error", getCombatTranslation('playerLostFight', combatResources.currentMonster.name)); // Use direct notify

}
    // Optionally, reset player HP or apply other penalties
    combatResources.currentHp = combatResources.hp; // Fully heal player after loss
    notify("info", getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0))); // Use direct notify
}

// 5. Paste these event listeners into your `game.init()` function.
//your code
document.getElementById('collapsible').addEventListener('click', showAndHideCombatUI);
//
convertZenithToSkillPointBtn.addEventListener('click', convertResourceToSkillPoint);
upgradeAtkBtn.addEventListener('click', () => upgradeStat('atk'));
upgradeDefBtn.addEventListener('click', () => upgradeStat('def'));
upgradeHpBtn.addEventListener('click', () => upgradeStat('hp'));
fightMonsterBtn.addEventListener('click', fightMonster);

// 6. Add this function call at the end of your `loadGame()` function,
//    and also at the very end of your `game.init()` function.
function loadCombatData() {
    try {
        const savedCombatData = localStorage.getItem('incrementalGameCombatSave');
        if (savedCombatData) {
            const parsedCombatData = JSON.parse(savedCombatData);
            Object.assign(combatResources, parsedCombatData);
            // Ensure currentHp doesn't exceed max HP if max HP was reduced in save
            if (combatResources.currentHp > combatResources.hp) {
                combatResources.currentHp = combatResources.hp;
            }
        }
    } catch (e) {
        console.error("Error loading combat save data:", e);
    }
}

// 7. Add this function call at the end of your `saveGame()` function.
function saveCombatData() {
    try {
        localStorage.setItem('incrementalGameCombatSave', JSON.stringify(combatResources));
    } catch (e) {
        console.error("Error saving combat data:", e);
    }
}

// 8. Ensure your main `updateDisplay()` function calls `updateCombatDisplay()`
//    at the end, after all other display updates.
//    (e.g., `updateDisplay() { ... your existing code ... updateCombatDisplay(); }`)

// 9. Merge combatTranslations into your main `translations` object in `script.js`.
//    Example (do this once, typically near where `translations` is defined):
//    Object.assign(translations.en, combatTranslations.en);
//    Object.assign(translations.vi, combatTranslations.vi);

// Initial update of combat display (will be called again by updateDisplay after load)
updateCombatDisplay();


    // Public interface for the game
    return {
        init: () => {
            // Event Listeners
            addWoodButton.addEventListener('click', addWood);
            upgradeChopPowerButton.addEventListener('click', upgradeChopPower);
            buyWoodPerSecondButton.addEventListener('click', buyWoodPerSecondAutomation);

            buyStoneButton.addEventListener('click', () => buyResource('stone', 'wood'));
            buyIronButton.addEventListener('click', () => buyResource('iron', 'stone'));
            buyAlloyButton.addEventListener('click', () => buyResource('alloy', 'iron'));
            buyCircuitryButton.addEventListener('click', () => buyResource('circuitry', 'alloy'));
            buyAICoreButton.addEventListener('click', () => buyResource('aiCore', 'circuitry'));
            buyConsciousnessButton.addEventListener('click', () => buyResource('consciousness', 'aiCore'));
            buyRealityShardButton.addEventListener('click', () => buyResource('realityShard', 'consciousness'));
            buyParadoxButton.addEventListener('click', () => buyResource('paradox', 'realityShard'));
            buySingularityButton.addEventListener('click', () => buyResource('singularity', 'paradox'));
            buyMultiverseButton.addEventListener('click', () => buyResource('multiverse', 'singularity'));
            buyOmniscienceButton.addEventListener('click', () => buyResource('omniscience', 'multiverse'));
            buyGenesisButton.addEventListener('click', () => buyResource('genesis', 'omniscience'));
            buyVoidButton.addEventListener('click', () => buyResource('void', 'genesis'));
            buyTheAllButton.addEventListener('click', () => buyResource('theAll', 'void'));
            buyTranscendenceButton.addEventListener('click', () => buyResource('transcendence', 'theAll'));
            buyTheAbsoluteButton.addEventListener('click', () => buyResource('theAbsolute', 'transcendence'));
            buyTheEndButton.addEventListener('click', () => buyResource('theEnd', 'theAbsolute'));
            buyTheNewBeginningButton.addEventListener('click', () => buyResource('theNewBeginning', 'theEnd'));
            buyTheArchitectsWillButton.addEventListener('click', () => buyResource('theArchitectsWill', 'theNewBeginning'));
            buyTheOmniverseButton.addEventListener('click', () => buyResource('theOmniverse', 'theArchitectsWill'));
            buyTheBoundlessVoidButton.addEventListener('click', () => buyResource('theBoundlessVoid', 'theOmniverse'));
            buyCosmicFabricButton.addEventListener('click', () => buyResource('cosmicFabric', 'theBoundlessVoid'));
            buyInfiniteNexusButton.addEventListener('click', () => buyResource('infiniteNexus', 'cosmicFabric'));
            buyEternalEchoButton.addEventListener('click', () => buyResource('eternalEcho', 'infiniteNexus'));
            buyZenithOfCreationButton.addEventListener('click', () => buyResource('zenithOfCreation', 'eternalEcho'));
            buyUniversalSingularityButton.addEventListener('click', () => buyResource('universalSingularity', 'zenithOfCreation'));
            buyExistentialFabricButton.addEventListener('click', () => buyResource('existentialFabric', 'universalSingularity'));
            buyTemporalFluxButton.addEventListener('click', () => buyResource('temporalFlux', 'existentialFabric'));
            buyMultidimensionalHarmonyButton.addEventListener('click', () => buyResource('multidimensionalHarmony', 'temporalFlux'));
            buyCosmicAwakeningButton.addEventListener('click', () => buyResource('cosmicAwakening', 'multidimensionalHarmony'));
            buyDivineSparkButton.addEventListener('click', () => buyResource('divineSpark', 'cosmicAwakening'));
            // Stage 5 Event Listeners
            buyCosmicDustButton.addEventListener('click', () => buyResource('cosmicDust', 'divineSpark'));
            buyStellarNucleusButton.addEventListener('click', () => buyResource('stellarNucleus', 'cosmicDust'));
            buyGalacticCoreButton.addEventListener('click', () => buyResource('galacticCore', 'stellarNucleus'));
            // Stage 6 Event Listeners
            buyQuantumEntanglementButton.addEventListener('click', () => buyResource('quantumEntanglement', 'galacticCore'));
            buyDimensionalRiftButton.addEventListener('click', () => buyResource('dimensionalRift', 'quantumEntanglement'));
            buyRealityAnchorButton.addEventListener('click', () => buyResource('realityAnchor', 'dimensionalRift'));
            // Stage 7 Event Listeners
            buyOmniEnergyButton.addEventListener('click', () => buyResource('omniEnergy', 'realityAnchor'));
            buyPrimeMoverButton.addEventListener('click', () => buyResource('primeMover', 'omniEnergy'));
            buyTrueCreatorButton.addEventListener('click', () => buyResource('trueCreator', 'primeMover'));
            // Stage 8 Event Listeners
            buyCosmicSingularityButton.addEventListener('click', () => buyResource('cosmicSingularity', 'trueCreator'));
            buyExistentialTruthButton.addEventListener('click', () => buyResource('existentialTruth', 'cosmicSingularity'));
            buyTheUltimateFormButton.addEventListener('click', () => buyResource('theUltimateForm', 'existentialTruth'));
            // Stage 9 Event Listeners
            buyCosmicNexusButton.addEventListener('click', () => buyResource('cosmicNexus', 'theUltimateForm'));
            buyQuantumSingularityButton.addEventListener('click', () => buyResource('quantumSingularity', 'cosmicNexus'));
            buyTranscendentEssenceButton.addEventListener('click', () => buyResource('transcendentEssence', 'quantumSingularity'));


            saveGameBtn.addEventListener('click', () => saveGame(0));
            loadGameBtn.addEventListener('click', loadGame);
            closeCriticalFeedbackButton.addEventListener('click', dismissCriticalFeedback);
            document.addEventListener('keydown', handleCheatCode);

            submitQuizAnswerButton.addEventListener('click', checkAnswer);
            quizAnswerInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    checkAnswer();
                }
            });

            ttsToggleBtn.addEventListener('click', toggleTextToSpeech);
            languageToggleBtn.addEventListener('click', toggleLanguage); // New language toggle listener

            const isGitHubPages = window.location.hostname.includes('github.io') || window.location.hostname.includes('github.com');
            if (isGitHubPages) {
                loreButtons.forEach(button => {
                    button.style.display = 'none';
                    const loreDisplayElement = loreDisplays[button.dataset.resource];
                    if (loreDisplayElement) {
                        loreDisplayElement.style.display = 'none';
                    }
                });
            } else {
                loreButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const resourceName = button.dataset.resource;
                        const loreDisplayElement = loreDisplays[resourceName];
                        generateLore(resourceName, loreDisplayElement);
                    });
                });
            }

            // Start the initial star spawning interval
            starSpawnIntervalId = setInterval(spawnStar, STAR_SPAWN_DURATION);
            // --- End Star Clicker Feature Initialization ---


            // Start game loops
            setInterval(gameLoop, 100);
            setInterval(updateTimePlayed, 1000);
            setInterval(autoSave, 30000);

            // Initial setup
            updateDisplay(); // Call once to set initial text and values
       
            loadGame();
            loadNewQuestion();
                   loadCombatInfo();
        },
        // Expose specific functions if needed for external interaction, e.g., for testing
        getWoodCount: () => resources.wood.count,
        addWoodExternal: (amount) => { resources.wood.count += amount; updateDisplay(); },
        setAPIKey: (apiKey) => {
            resources.apiKey = apiKey;
            saveGame(1); // Save the game state after setting the API key
        },
        findNewestOwnedResource: findNewestOwnedResource // Expose the new function
    };
})();

// Initialize the game
game.init();
