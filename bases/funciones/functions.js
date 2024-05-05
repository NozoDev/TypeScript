"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activarBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activarBatisignal);
    const heroName = returnName();
})();
