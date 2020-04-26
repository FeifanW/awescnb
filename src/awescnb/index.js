import '@/assets/css/common.css'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
    init(building) {
        if (env === 'dev') {
            building()
        } else {
            $.extend({
                awescnb: options => {
                    if (options) $.extend(true, defaultOptions, options)
                    window.opts = defaultOptions
                    building()
                },
            })
        }
    }

    // dev env
    devOpts() {
        if (env === 'dev') {
            window.opts = defaultOptions
        }
        require('./build/index')()
    }
}

new AwesCnb().devOpts()

export default AwesCnb
