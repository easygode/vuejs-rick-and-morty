<script>
import { store } from '../store';
import CharacterCard from './CharacterCard.vue';


    export default {
        name:'CharacterList',
        components: {
            CharacterCard
        },
        data() {
            return {
                store,
                //characters: []
            }
        },
        
    }
</script>

<template>
    <div class="container">
       <div class="row g-3">
            <div class="col-12 col-sm-3" v-for="character in store.characters">
                <CharacterCard :img="character.image" :name="character.name" :status="character.status" :species="character.species"  />
            </div>
       </div>
    </div>
</template>



<style lang="scss" scoped>

</style>