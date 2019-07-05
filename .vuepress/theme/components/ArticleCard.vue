<template>
  <router-link 
  :to="article.path"
  class="w-full lg:max-w-full lg:flex shadow hover:shadow-2xl rounded-lg overflow-hidden">
    <img v-if="hasAvatar" class="object-cover h-48 lg:h-48 w-full lg:w-1/2 flex-none" :src="avatar" />
    <div class="bg-white p-4 flex flex-col justify-between leading-normal">
    <div class="mb-3">
      <div class="text-gray-900 font-sans font-bold font-sans text-xl my-2">{{article.title}}</div>
      <p v-if="hasDescription" class="text-gray-500 text-base ">
          {{description}}</p>
    </div>
    
    <div v-if="hasTags">
        <span v-for="(tag,index) in tags" :key="index" 
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #{{tag}}
        </span>
    </div>
  </div>
</router-link> 
</template>

<script>
export default {
    props: {
        article: Object,
    },
    data(){
        return {
            tags:[]
        }
    },

    methods:{
        tagsInit(){
            if(this.article.frontmatter.tags){
                this.tags = this.article.frontmatter.tags.split(",")
            }else{
                this.tags = []
            }
            
        }
    },

    computed: {
        hasAvatar(){
            return !!this.article.frontmatter.avatar
        },
        avatar(){
            return this.article.frontmatter.avatar
        },
        hasTags(){
            return this.tags && this.tags.length > 0
        },
        hasDescription(){
            return !!this.article.frontmatter.description
        },
        description(){
            return  this.article.frontmatter.description
        }
    },

    mounted(){
        this.$nextTick(()=>{
            this.tagsInit()
        })
    }
}
</script>


<style lang="stylus">
.article-card
    flex 1 1 300px
    transition all 0.5s ease
    &:hover
        transition all 0.4s ease
        transform translate3D(0, -1px, 0) scale(1.02)

</style>
