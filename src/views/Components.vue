<template>
    <div class="lw-container">
        <div class="components-grid">
            <div class="grid-section">
                <h1 class="lw-section-title">Кнопки:</h1>

                <h2>MainButton</h2>

                <main-button title="Далее"></main-button>
                <main-button title="Далее" outlined></main-button>
                <main-button title="Сохранить" iconType="save"></main-button>
                <main-button title="Сохранить" iconType="save" iconPositionRight></main-button>
                <main-button title="Сохранить" iconType="save" outlined></main-button>

                <h2>BackButton</h2>
                <back-button title="Назад"></back-button>

                <h2>SectionHEaderButton</h2>
                <section-header-button title="Назад"></section-header-button>
            </div>

            <div class="grid-section">
                <h1 class="lw-section-title">Другое:</h1>

                <h2>Badge</h2>

                <badge value="123"/>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    main {
        padding: 40px 0;
    }

    button {
        margin: 10px 0 !important;
    }

    .components-grid {
        padding: 50px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;

        .grid-section {
            padding: 20px;

            h1 {
                margin-bottom: 40px;
            }

            border: 1px solid black;
        }
    }
</style>
  