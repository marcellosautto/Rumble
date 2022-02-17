
<template>
    <authenticator>
        <template v-slot="{ user, signOut }"> 
            <h1>Hello, {{ user.attributes.email }}!</h1>
            <button @click="signOut">Sign Out</button>
        </template>
    </authenticator>
</template>

<script setup>

import {Authenticator} from '@aws-amplify/ui-vue';
import "@aws-amplify/ui-vue/styles.css";

import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig);

</script>

<script>
export default {
    name: 'Login',
    props: {

    }
}
</script>

<style scoped>


.title{
    text-align: center;
}


</style>