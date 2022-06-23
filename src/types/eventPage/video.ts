export type GetVideoSlugResponse = {
lesson:{
  title:string
  videoId:string
  description:string
  teacher:{
    bio:string
    avatarURL:string
    name:string
  }
}
}


export type VideoProps={
  lessonSlug:string
}