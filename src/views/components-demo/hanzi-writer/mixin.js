export default {
    methods: {
        loop(i, myName) {
            let delayBetweenAnimations = 100; // milliseconds
            myName[i].animateCharacter({
                onComplete: () => {
                    setTimeout(() => {
                        if (i < myName.length - 1) {
                            this.loop(i + 1, myName);
                        } else {
                            this.disabledBtn = false;
                            return;
                        }
                    }, delayBetweenAnimations);
                }
            });
        }
    }
}
