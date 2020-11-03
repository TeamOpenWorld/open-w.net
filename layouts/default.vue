<template>
    <div>
        <section class="nav">
            <a href="">楽曲レーベル</a>
        </section>
        <Nuxt />
    </div>
</template>

<style scoped>
p {
    padding: 0;
    margin: 0;
}

.nav {
    padding: 0 1em;
}

.nav > a {
    text-decoration: none;
    padding: 0.5em;
    display: block;
    background: linear-gradient(to right, #37aed0 50%, #fff 50%);
    background-size: 200% 100.5%;
    background-position: right bottom;
    font-size: 0.9em;
    color: #020202;
    border: none;
    border-color: none;
    transition: all 0.2s ease-out;
}

.nav > a:hover {
    background-position: left bottom;
    color: white;
}
</style>
