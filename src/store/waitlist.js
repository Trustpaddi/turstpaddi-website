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

        sendNewWait() {
            if (this.$state.email != '') {
                this.loading = true
                axios({
                    method: 'post',
                    url: `https://trustpaddi-waitlist.herokuapp.com/waitlist/addWait/${this.email}`
                }).then(res => {
                    console.log(res.data)
                    if (res.status == 201) {
                        this.$state.loading = false
                        this.$state.text = res.body.message
                        this.$state.snack = true
                    } else if (res.status == 400) {
                        this.$state.loading = false
                        this.$state.text = res.body.message
                        this.$state.snack = true
                    }
                    this.$state.loading = false
                }).catch(() => {
                    this.$state.text = 'You are already on our watch list'
                    this.$state.loading = false
                    this.$state.snack = true
                })
            }
        }
    }
})