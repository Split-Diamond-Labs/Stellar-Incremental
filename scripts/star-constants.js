const STAR_TYPES = {
  M: 0,
  K: 1, 
  G: 2, 
  F: 3, 
  A: 4, 
  B: 5, 
  O: 6
}

const NUCLEOSYNTHESIS_PATHWAYS = {
  PP_CHAIN: 0,
  TRIPLE_ALPHA_PROCESS: 1,
  CNO_CYCLE: 2,
  C_TO_O: 3,
  C_TO_NA: 4,
  C_TO_NE: 5,
  C_TO_MG: 6,
  O_TO_SI: 7,
  O_TO_S: 8,
  SI_TO_FE: 9,
  S_TO_FE:10
}

const STAR_CONSTANTS = {
  0: {
    TYPE: "M",
    MASS: 0.442,
    MAIN_SEQUENCE_AGE: 76992000,
    PROCESSES: {
      0: 0
    }
  },
  1: {
    TYPE: "K",
    MASS: 0.746,
    MAIN_SEQUENCE_AGE: 20804000,
    PROCESSES: {
      0: 0,
      1: 20804000
    }
  },
  2: {
    TYPE: "G",
    MASS: 1.000,
    MAIN_SEQUENCE_AGE: 10000000,
    PROCESSES: {
      0: 0,
      1: 1100000
    }
  },
  3: {
    TYPE: "F",
    MASS: 1.250,
    MAIN_SEQUENCE_AGE: 5724000,
    PROCESSES: {
      0: 0,
      1: 6224000
    }
  }
};