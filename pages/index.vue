<template>
    <div id="main">
        <div class="header mb-4">
            <b-container class="text-white">
                <h1>TeamOpenWorld</h1>
                <p>「自分らしく生きる」を支える団体</p>
            </b-container>
        </div>
        <b-container class="py-4">
            <h1>Services</h1>
            <a href="https://tokyounderground.net/" target="_blank"
                >楽曲プロモーションレーベル - TokyoUnderground (2020-)</a
            >
            <h1 class="mt-5">Software</h1>
            <p>準備中</p>
        </b-container>
        <div class="footer mt-5 py-3">
            <b-container>
                <p>&copy; TeamOpenWorld 2020</p>
                <a href="https://twitter.com/openworld_net" target="_blank"
                    >Twitter</a
                >
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Top",
            meta: [
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Top - TeamOpenWorld"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: "Official site of TeamOpenWorld."
                }
            ]
        };
    }
};
</script>

<style scoped>
#main {
    font-family: "Noto Sans JP";
}

.header {
    padding: 10vh 0;
    background: linear-gradient(-135deg, #e1f6ff, #47c551);
}

.footer {
    border-top: 2px solid black;
}
</style>
