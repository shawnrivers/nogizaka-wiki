export enum CdsCurrentPage {
  Single = "singles",
  Album = "albums",
}

export enum CdType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  T = "T",
  L = "Limited",
}

export enum APIResponseSongType {
  None = "none",
  Title = "title",
  Coupling = "coupling",
  Under = "under",
  Unit = "unit",
  Solo = "solo",
  FirstGeneration = "first generation",
  SecondGeneration = "second generation",
  ThirdGeneration = "third generation",
  FourthGeneration = "fourth generation",
}

export enum SongType {
  None = "",
  Title = "表題曲",
  Coupling = "Coupling",
  Under = "Under",
  Unit = "Unit",
  Solo = "Solo",
  FirstGeneration = "1期生",
  SecondGeneration = "2期生",
  ThirdGeneration = "3期生",
  FourthGeneration = "4期生",
}

export enum FukujinType {
  RowOne = "row-1",
  RowOneTwo = "row-1-2",
}

export enum FocusPerformersType {
  Center = "center",
  Solo = "solo",
  Unit = "unit",
  None = "",
}

export enum FetchStatus {
  None,
  Rejected,
  Pending,
  Fulfilled,
}
