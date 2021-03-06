//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'
import Utils from './modules/utils'
import SetUp from './modules/setuproutine'

const STATEMENT_END = [';', '{', '}']
    const SKIP = ['*', '//', '/**', '///', '', '*/', '/*']
const BLOCK_END = '}'
const ENUM = 'enum '
const EXTENDS = ' extends'
const FUNCTION = 'function '
const FUNCTIONES6 = '=>'

let outputJs = []
let nFuncInt = 0
let nMember = 0
let nMultiTypes = 0
let ignore_lines = []
let skipFlag = false

function file_reset() {
    outputJs = []
    ignore_lines = []
    nFuncInt = 0
    nMultiTypes = 0
    nMember = 0
}

function processLines(element = '', index = 0, lines = []) {

    if (ignore_lines.includes(index)) {
        return
    }
    var line = Utils.compact(element)
    let firstWord = line.trim().split(' ', 1)[0]
    var outLine = ''

    outLine = line.trim()

    //Don't scrub ENUMS
    if (line.includes(ENUM)) {
        skipFlag = true
    }

    if (line.includes(BLOCK_END)) {
        skipFlag = false
    }

    if (!SKIP.includes(firstWord) && !skipFlag) {
        if (line && (line.includes(EXTENDS) || line.includes(FUNCTION) || line.includes(FUNCTIONES6))) {
            if (!STATEMENT_END.includes(line.slice(-1))) {
                var o = Utils.unWrapStatement(lines, index)
                ignore_lines = o['skip']
                outLine = o['line']
                // console.log(`Incomplete function/interface statement line: ${line}`);
                // console.log('Unwrapping to this line: ' + outLine);
                // console.log(' ');
                nFuncInt++
            }
        }
        if (line && (line.includes(':') && line.includes('|'))) {
            if (!STATEMENT_END.includes(line.slice(-1))) {
                var o = Utils.unWrapStatement(lines, index)
                ignore_lines = o['skip']
                outLine = o['line']
                // console.log(`Incomplete multi type statement line: ${line}`);
                // console.log('Unwrapping to this line: ' + outLine);
                // console.log(' ');
                nMultiTypes++
            }
        }
        if (line && (line.includes(':') && line.includes('('))) {
            if (!STATEMENT_END.includes(line.slice(-1))) {
                var o = Utils.unWrapStatement(lines, index)
                ignore_lines = o['skip']
                outLine = o['line']
                // console.log(`Incomplete prop/method statement line: ${line}`);
                // console.log('Unwrapping to this line: ' + outLine);
                // console.log(' ');
                nMember++
            }
        }
    }
    outputJs.push(outLine)
    return
}

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('** Starting Program...')
SetUp.cleanupOutput('./input-scrubbed')

let files = FileOps.walkFiles('./input')
files.forEach(processFile)

function processFile(fileName) {
    console.log(`** Processing ${fileName}`)
    let lines = FileOps.loadFile(`./input/${fileName}`)
    lines.forEach(processLines);
    console.log(`*** Writing scrubbed output ${fileName}, nMultiTypes = ${nMultiTypes},
        nFuncInt = ${nFuncInt}, nMember = ${nMember}`)
    FileOps.writeFile(outputJs, `./input-scrubbed/${fileName}`)
    file_reset()
}
