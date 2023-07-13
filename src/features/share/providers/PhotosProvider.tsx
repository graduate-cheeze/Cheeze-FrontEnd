import { ReactNode, createContext, useState } from 'react'

interface InitialState {
  photos: string[]
  addPhoto: (imageUrl: string) => void
  removePhoto: (imageUrl: string) => void
}

const initialState: InitialState = {
  photos: [],
  addPhoto: () => {},
  removePhoto: () => {},
}

export const PhotoContext = createContext<InitialState>(initialState)

interface Props {
  children: ReactNode
}

const PhotoProvider = ({ children }: Props) => {
  const [photos, setPhotos] = useState<string[]>([])

  const addPhoto = (imageUrl: string) => {
    setPhotos([...photos, imageUrl])
  }

  const removePhoto = (imageUrl: string) => {
    setPhotos(photos.filter((i) => i !== imageUrl))
  }

  return (
    <PhotoContext.Provider value={{ photos, addPhoto, removePhoto }}>
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoProvider
