export interface IPost {
    userId: number
    id: number,
    title: string,
    body: string,
}

export interface IUser {
    id: number,
    name: string,
    company: {
        name: string
    },
}

export interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    thumbnailUrl: string
}

export interface Item {
    id: number
    title: string
    body: string
    username: string
    company: {
        name: string
    }
    photoUrl: string
}
