import FormScript from 'formscript';

export default class PersonCustomObjectInstance6 extends FormScript {

    run(callback) {
        let promises = [];

        this.whenAjaxDone(promises, callback);
    }

}