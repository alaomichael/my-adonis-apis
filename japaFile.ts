import 'reflect-metadata'

import {join} from 'path'

import sourceMapSupport from 'source-map-support'

import {configure} from 'japa'

process.env.NODE_ENV ='testing'

process.ADONIS_ACE_CWD = join(__dirname)

sourceMapSupport.install({ handleUncaughtExceptions: false})

async function startHttpServer() {
    const { Ignitor} = await import('@adonisjs/core/build/src/Ignitor')

    process.env.PORT String(await getPort())

    await new Ignitor(__dirname).httpServer().start()
}

configure({
    files: ['test/**/*.spec.ts'],
    before: [startHttpServer],
})
