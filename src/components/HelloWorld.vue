<script setup>
import { collection, getDocs, query } from "firebase/firestore";
import { onMounted, ref } from "vue";

import { firestore } from "../plugins/firebase";
import { datadogRum } from "@datadog/browser-rum";

const collectionCount = ref(0);

onMounted(() => {
  getData();
});

const getData = async () => {
  const q = query(collection(firestore, "users"));

  const querySnapshot = await getDocs(q);
  collectionCount.value = querySnapshot.docs.length;
  console.log(collectionCount.value);
  datadogRum.addAction("test", { test: collectionCount.value });
};

// const logout = () => {
//   signOut();
// };
</script>

<template>
  <div class="hello">
    Test Firestore Error
    <div>{{ collectionCount }}</div>
    <!-- <button @click="logout">Logout</button> -->
  </div>
</template>
