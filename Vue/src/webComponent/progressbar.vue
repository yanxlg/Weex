<template>
    <div class="progressbar"></div>
</template>
<style>
    .progressbar {
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAP1BMVEUAAAD/2GH/32D/2GL/2GL/2GD/2mD/2GH/12H/12D/2WP/2GH/2GH/2GH/12H/2GH/2GL/12L/2WL/2GD/2GKSuHeKAAAAFHRSTlMA8BBggEAw0MAgUJDfsKC/cOCfb1K1/yAAAAXJSURBVHja7Z3rmpsgEIaHkyKKh2Tu/1qbdruPTYgoYGDc8v5uEj/nm2GkOAuVSqVSqVQqlUolEm76CYfpzuHCPES0+Bdm4KJw0eITAi4IFxYdGthDTC1OfQNUMBbfMe19bMAvWkEio8SAG3D/53CF9R2UhUuGmyjw0OEzt5JR6W7owZ/uI77QFssV3qMf5fswOrSFYnJnuIPP9wpdJBTADLiH9n4eXQbITjfhPgr8EYlZeXK7at8o3b50lxLhwBn86OJCjoRj2V/glKc65IBPuyJGceiCpFt/IR/NTrGyq4hdZnzBQDaE11Y6sPnrxqevs5CN3ueouUt7iBkhF3zyBQMiUePfVh5ywVvcYlRJX6yE8i+FmdLcdnAhGrZlKgVXYkvHcrEthi0dPYmH7WQdy7VcBdCxHxGOjbrLrhaOPzroPGAncMOV/P2EsL+jf+s+pGOGPPDptJ1kUSY9XFeL8wsvayAT/WnPwbwtqYM//y5PSZByOlxbTwnfVFQH9GeVmI4V1QH6rA28qfBeoMQXhrg0MeggICfinG1uzgrpWGGnbOH1JfoSNyTJlUtR6BMtpm/itYUKlmvvtGVRFE+QDV/0EMZQPEG+kIn5PuMLC4cytEl3lDM3yQrRuSFJCaiFYkgnJAkBYR0Ugy/xIZEFHm0DWqUxumQtUBQdGxJDYglZ6WINYmkFxD2AM0TegOJ7ipFX1DtnSoozRqU7oxaQNyHhsI+gliG/GSPSfaS0hmx1wW2Es2hsuy/BS4mh0b7vNRsi2FlEjhd3wV0sezUjEWyg4xuKqf4bE/iAJGk6C4AH5q4muIh8YcP6LWfPggxzUJI0VJ3l1i0TIpsBIdqQDW1LrvFd6UOubSBwWn0LEeCWjl4Hv9KEvENAsmH8hh3PdkG0P/lCH/e9JNn5fiOPr3GWcK47ftG+4JHaz3pFHTc+I1y03JoK25AuWgGXp14lE2M5ahhFuvoC6MNCCHdaVQhFIfLo6iCuJURu/0PSC3sV8nOEENpCCRXyQ5OdnBB7VIghLkTjE/NlF0T93zWNDfE2fngR8lMerGAbyvtzQYahPZDJHE9hTbpHcZe5i66I4/EOaiZdf12/XHQbJWQ0EeWy1YSc4mCEsz3ovwU14Wy3IdcmCa/tQW5RVE6S76eIuuqBgUCztGRXEh12ZT3Vow9doFcUVW/NodnLis+Fe88Q2nRYmnWrCT4KKGgeznzNXRF8Uo3RWBMjDvFaWu9cvPeJPfKZ8mMgXYaYu8vohcRE+b2nF5IpqgI1xN5MAlCR8wFaaiGZIgc6CmIhUdHXs7izFkoyYOzZ15nESOFvZPzVcFZuXOr+UBPGE27CBMWwKfbgjEy+q7RhCRKJ9I58SMtXzoi80X5LvaMCSbwKfsJltOVniL+bU7bEJFnxZZG3Z8z/tlg8TW6eS0gagnSDrAg8p3aKwmOpxGljFXVRJQYddEKXk55s6QUrfaiJKTJMz9WRvlc45lOyr8OePXDSvTFZdLQ88RsLZLz4wOBRg/mViI/8Zo8reVbGO76hP/UEyMrE4UNwuzEo+WIjsZthZ3B1upIMOyurrT4zN44zzGCv1VaBBSt9AD4TcCpmiNORrgSnE3+jmzBaR7oSlGf5S6JHRw4lwyn+UkMGHWvt+pQUsfnd7aojg5JEKWKNRqaBtiN6pET+JPfIwJHDZ5Do4WYiCu6N4TY9fAzD0APrgxzd9U4w8j33NC16aXvDw/4ocsY0d/9Q6J4YBV6UXNe+nOnh2mufYervqnPugrrLafVTGVutcI1HYdMDK6WdHjA8iu4gD4bhB2ECssFH/BiWQ05Uix+hVZCRdc/mwq5a4ZKdLOPoMwFtKauMEnCx4Cksc/Gzk0JjMrr4kbC/3V+4w0j9ufx/MCOLVDESOSGdpIWNNCzl0EgdkBeSzJsQb1GzXXZLlJ1JvU+3jRLSaoYOTFt5FQ1PqAdCPhDqQfGVolKpVCqVSqUSxy+Umv3fPKPCXgAAAABJRU5ErkJggg==);
        width:40px;
        height:40px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        animation: rotate 1.5s linear infinite;
        -webkit-animation: rotate 1.5s linear infinite;
    }
    @keyframes rotate {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rotate {
        from{
            -webkit-transform: rotate(0deg);
        }
        to{
            -webkit-transform: rotate(360deg);
        }
    }
</style>
<script>
    export default {
        props: [],
        data () {
            return {
            }
        }
    }
</script>
