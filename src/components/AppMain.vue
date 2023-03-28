<script>
import CharacterSearch from './CharacterSearch.vue';
import CharacterList from './CharacterList.vue';
    export default {
        name: 'Main',
        components: {
            CharacterSearch,
            CharacterList
        },
        methods: {
            handleSearch(){
                console.log('ho ascoltato evento');
                this.$emit('qualcosa');
            }
        }
    }
</script>

<template>
    <main>
        <CharacterSearch @search="handleSearch" />
        <CharacterList />
    </main>
</template>



<style lang="scss" scoped>

</style>