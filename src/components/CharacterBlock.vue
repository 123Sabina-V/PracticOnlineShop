<template>
    <div class="character-block">
        <div class="character-block__image">
            <img :src="character.image" :alt="character.name">
        </div>
        <div>
            <span>
            {{character.name}}
            </span>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'character-block',
    props: {
        character: {
            type: Object,
            required: true,
        }
    }
};

</script>