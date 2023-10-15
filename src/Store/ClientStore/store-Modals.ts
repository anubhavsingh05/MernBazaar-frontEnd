

import { create } from 'zustand'



type reviewerType = {
     name: string
     rating: number
     comment: string
}

type modalStoreType = {
    reviewer    : reviewerType
    setReviewer : (reviewer:reviewerType) => void

    showReviewModal       : boolean
    toggleShowReviewModal : () => void

    showDeleteReviewModal   : boolean
    toggleDeleteReviewModal : () => void

    showEditReviewModal       : boolean
    toggleShowEditReviewModal : () => void

    genericMessage     : string
    setGenericMessage  : (genericMessage:string) => void
    showGenericModal   : boolean
    toggleGenericModal : () => void
}





export const modalStore = create<modalStoreType>((set,_get) => ({
    reviewer : {name:'', rating:0, comment:''},
    setReviewer: (reviewer) => set(()=> ({reviewer})),

    showReviewModal:false,
    toggleShowReviewModal: () => set((state)=> (
        { showReviewModal:!state.showReviewModal }
    )),

    showDeleteReviewModal:false,
    toggleDeleteReviewModal: () => set((state)=> (
        { showDeleteReviewModal:!state.showDeleteReviewModal }
    )),

    showEditReviewModal:false,
    toggleShowEditReviewModal: () => set((state)=> (
        { showEditReviewModal:!state.showEditReviewModal }
    )),

    genericMessage:'',
    setGenericMessage: (genericMessage) => set(()=>({genericMessage})),
    showGenericModal:false,
    toggleGenericModal: () => set((state) => (
        { showGenericModal:!state.showGenericModal }
    ))
}))

