export enum TrackTypes {
  subtitles = 'subtitles',
  audio = 'audio',
  video = 'video',
}

export enum MkvEditorScript {
  addMissingLanguages = 'add-missing-languages',
  promptDefaultAudioLanguage = 'prompt-default-audio-language',
  setDefaultSubtitle = 'set-default-subtitle',
  sanitizeTitle = 'sanitize-title',
  removeUselessAudioTracks = 'remove-useless-audio-tracks',
  extractSubtitles = 'extract-subtitles',
}

export type CliConfig = {
  verbose: boolean
  debug: boolean
  batch: boolean
  scripts: Partial<Record<MkvEditorScript, boolean>>
}

export type Track = {
  codec: string
  id: number
  type: TrackTypes
  properties: {
    language: string
    uid: number
    number: number
    default_track: boolean
    forced_track: boolean
    enabled_track: boolean
  }
}

export type MkvDetails = {
  file_name: string
  warnings: any[]
  errors: any[]
  attachments: any[]
  chapters: { num_entries: number }[]
  tracks: Track[]
  container: {
    properties: {
      title: string
    }
  }
}

export type GlobalConfig = {
  plexFolder: string
}
