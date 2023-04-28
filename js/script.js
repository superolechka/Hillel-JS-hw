'use strict'

void function() {

    const user = {
        userName: 'Olga'
    }

    function test(age, nationality) {
        console.log(`name: ${this.userName}, age: ${age}, nationslity: ${nationality}`)
    }

    function myBind(func, context, ...rest) {
        return function(...args) {
            return func.apply(context, rest.concat(args))
        }
    }
    myBind(test, user)('25', 'ukrainian');
    myBind(test, user, '25')('ukrainian');
    myBind(test, user, '25', 'ukrainian')();

}()