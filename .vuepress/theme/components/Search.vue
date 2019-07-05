<template>
    <div class="relative">
        <input id="docsearch" class="transition  focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" type="text" placeholder="Search the docs (Press &quot;/&quot; to focus)">
        <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        
    },
    data(){
        return {
            query:"",
            focused:0
        }
    },
    methods:{
        go(e){
            console.log(e)
        },
        move (velocity) {
            console.log(velocity)
            // this.focused += velocity
            // if (this.focused < 0) this.focused = this.suggestions.length - 1
            // if (this.focused >= this.suggestions.length) this.focused = 0
        },
        toggle (dragged) {
            console.log(dragged)
            // if (dragged) return
            // this.openned = ! this.openned
            // if (! this.openned) return this.reset()
            // this.$nextTick(() => {
            //     this.$refs.input.focus()
            //     this.$refs.inputMobile.focus()
            // })
        }
    }
}
</script>