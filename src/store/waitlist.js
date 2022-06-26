import axios from 'axios'
import { defineStore } from 'pinia'

export const useWaitlistStore = defineStore({
    id: 'waitlist',

    state: () => ({
        dialog: false,
        email: '',
        snack: false,
        text: ``,
        loading: false
    }),

    actions: {
        toggleDialog() {
            this.dialog = !this.dialog
        },

        sendNewWait () {
            if (this.email != '') {
                this.loading = true
                axios({
                    method: 'post',
                    url: `https://trustpaddi-waitlist.herokuapp.com/waitlist/addWait/${this.email}`
                }).then(res => {
                    console.log(res.data)
                    if (res.status == 201) {
                        this.loading = false
                        this.snack = true
                        this.text = res.body.message
                    } else if (res.status == 400) {
                        this.loading = false
                        this.snack = true
                        this.text = res.body.message
                    }
                    this.loading = false
                }).catch(() => {
                    this.snack = true
                    this.text = 'You are already on our watch list'
                    this.loading = false
                })
            } else console.log('empty')
        }
    }
})