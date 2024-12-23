(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/97daa_@sanity_presentation_dist__chunks-es_QRCodeSVG_d1d469.js", {

"[project]/node_modules/.pnpm/@sanity+presentation@1.19.8_@emotion+is-prop-valid@1.2.2_@sanity+color@3.0.6_debug@4.4.0_reac_epti5vobal4q5xpl7pmbcf6wnm/node_modules/@sanity/presentation/dist/_chunks-es/QRCodeSVG.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>QRCodeSVG)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$0$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.0.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ class QrCode {
    /*-- Static factory functions (high level) --*/ // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
        const segs = QrSegment.makeSegments(text);
        return QrCode.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
        const seg = QrSegment.makeBytes(data);
        return QrCode.encodeSegments([
            seg
        ], ecl);
    }
    /*-- Static factory functions (mid level) --*/ // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = !0) {
        if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
        let version, dataUsedBits;
        for(version = minVersion;; version++){
            const dataCapacityBits2 = QrCode.getNumDataCodewords(version, ecl) * 8, usedBits = QrSegment.getTotalBits(segs, version);
            if (usedBits <= dataCapacityBits2) {
                dataUsedBits = usedBits;
                break;
            }
            if (version >= maxVersion) throw new RangeError("Data too long");
        }
        for (const newEcl of [
            Ecc.MEDIUM,
            Ecc.QUARTILE,
            Ecc.HIGH
        ])boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8 && (ecl = newEcl);
        const bb = [];
        for (const seg of segs){
            appendBits(seg.mode.modeBits, 4, bb), appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
            for (const b of seg.getData())bb.push(b);
        }
        assert(bb.length == dataUsedBits);
        const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
        assert(bb.length <= dataCapacityBits), appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb), appendBits(0, (8 - bb.length % 8) % 8, bb), assert(bb.length % 8 == 0);
        for(let padByte = 236; bb.length < dataCapacityBits; padByte ^= 253)appendBits(padByte, 8, bb);
        const dataCodewords = [];
        for(; dataCodewords.length * 8 < bb.length;)dataCodewords.push(0);
        return bb.forEach((b, i)=>dataCodewords[i >>> 3] |= b << 7 - (i & 7)), new QrCode(version, ecl, dataCodewords, mask);
    }
    /*-- Fields --*/ // The width and height of this QR Code, measured in modules, between
    // 21 and 177 (inclusive). This is equal to version * 4 + 17.
    // The index of the mask pattern used in this QR Code, which is between 0 and 7 (inclusive).
    // Even if a QR Code is created with automatic masking requested (mask = -1),
    // the resulting object still has a mask value between 0 and 7.
    // The modules of this QR Code (false = light, true = dark).
    // Immutable after constructor finishes. Accessed through getModule().
    modules = [];
    // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
    isFunction = [];
    /*-- Constructor (low level) and fields --*/ // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk){
        if (this.version = version, this.errorCorrectionLevel = errorCorrectionLevel, version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
        if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
        this.size = version * 4 + 17;
        const row = [];
        for(let i = 0; i < this.size; i++)row.push(!1);
        for(let i = 0; i < this.size; i++)this.modules.push(row.slice()), this.isFunction.push(row.slice());
        this.drawFunctionPatterns();
        const allCodewords = this.addEccAndInterleave(dataCodewords);
        if (this.drawCodewords(allCodewords), msk == -1) {
            let minPenalty = 1e9;
            for(let i = 0; i < 8; i++){
                this.applyMask(i), this.drawFormatBits(i);
                const penalty = this.getPenaltyScore();
                penalty < minPenalty && (msk = i, minPenalty = penalty), this.applyMask(i);
            }
        }
        assert(0 <= msk && msk <= 7), this.mask = msk, this.applyMask(msk), this.drawFormatBits(msk), this.isFunction = [];
    }
    /*-- Accessor methods --*/ // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
        return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    getModules() {
        return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/ // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
        for(let i = 0; i < this.size; i++)this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
        const alignPatPos = this.getAlignmentPatternPositions(), numAlign = alignPatPos.length;
        for(let i = 0; i < numAlign; i++)for(let j = 0; j < numAlign; j++)i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0 || this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
        const data = this.errorCorrectionLevel.formatBits << 3 | mask;
        let rem = data;
        for(let i = 0; i < 10; i++)rem = rem << 1 ^ (rem >>> 9) * 1335;
        const bits = (data << 10 | rem) ^ 21522;
        assert(bits >>> 15 == 0);
        for(let i = 0; i <= 5; i++)this.setFunctionModule(8, i, getBit(bits, i));
        this.setFunctionModule(8, 7, getBit(bits, 6)), this.setFunctionModule(8, 8, getBit(bits, 7)), this.setFunctionModule(7, 8, getBit(bits, 8));
        for(let i = 9; i < 15; i++)this.setFunctionModule(14 - i, 8, getBit(bits, i));
        for(let i = 0; i < 8; i++)this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
        for(let i = 8; i < 15; i++)this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
        this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
        if (this.version < 7) return;
        let rem = this.version;
        for(let i = 0; i < 12; i++)rem = rem << 1 ^ (rem >>> 11) * 7973;
        const bits = this.version << 12 | rem;
        assert(bits >>> 18 == 0);
        for(let i = 0; i < 18; i++){
            const color = getBit(bits, i), a = this.size - 11 + i % 3, b = Math.floor(i / 3);
            this.setFunctionModule(a, b, color), this.setFunctionModule(b, a, color);
        }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
        for(let dy = -4; dy <= 4; dy++)for(let dx = -4; dx <= 4; dx++){
            const dist = Math.max(Math.abs(dx), Math.abs(dy)), xx = x + dx, yy = y + dy;
            0 <= xx && xx < this.size && 0 <= yy && yy < this.size && this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
        for(let dy = -2; dy <= 2; dy++)for(let dx = -2; dx <= 2; dx++)this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
        this.modules[y][x] = isDark, this.isFunction[y][x] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/ // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
        const ver = this.version, ecl = this.errorCorrectionLevel;
        if (data.length != QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
        const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver], blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver], rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8), numShortBlocks = numBlocks - rawCodewords % numBlocks, shortBlockLen = Math.floor(rawCodewords / numBlocks), blocks = [], rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
        for(let i = 0, k = 0; i < numBlocks; i++){
            const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
            k += dat.length;
            const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
            i < numShortBlocks && dat.push(0), blocks.push(dat.concat(ecc));
        }
        const result = [];
        for(let i = 0; i < blocks[0].length; i++)blocks.forEach((block, j)=>{
            (i != shortBlockLen - blockEccLen || j >= numShortBlocks) && result.push(block[i]);
        });
        return assert(result.length == rawCodewords), result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
        if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
        let i = 0;
        for(let right = this.size - 1; right >= 1; right -= 2){
            right == 6 && (right = 5);
            for(let vert = 0; vert < this.size; vert++)for(let j = 0; j < 2; j++){
                const x = right - j, y = right + 1 & 2 ? vert : this.size - 1 - vert;
                !this.isFunction[y][x] && i < data.length * 8 && (this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7)), i++);
            }
        }
        assert(i == data.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
        if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
        for(let y = 0; y < this.size; y++)for(let x = 0; x < this.size; x++){
            let invert;
            switch(mask){
                case 0:
                    invert = (x + y) % 2 == 0;
                    break;
                case 1:
                    invert = y % 2 == 0;
                    break;
                case 2:
                    invert = x % 3 == 0;
                    break;
                case 3:
                    invert = (x + y) % 3 == 0;
                    break;
                case 4:
                    invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                    break;
                case 5:
                    invert = x * y % 2 + x * y % 3 == 0;
                    break;
                case 6:
                    invert = (x * y % 2 + x * y % 3) % 2 == 0;
                    break;
                case 7:
                    invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                    break;
                default:
                    throw new Error("Unreachable");
            }
            !this.isFunction[y][x] && invert && (this.modules[y][x] = !this.modules[y][x]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
        let result = 0;
        for(let y = 0; y < this.size; y++){
            let runColor = !1, runX = 0;
            const runHistory = [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            for(let x = 0; x < this.size; x++)this.modules[y][x] == runColor ? (runX++, runX == 5 ? result += QrCode.PENALTY_N1 : runX > 5 && result++) : (this.finderPenaltyAddHistory(runX, runHistory), runColor || (result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3), runColor = this.modules[y][x], runX = 1);
            result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
        }
        for(let x = 0; x < this.size; x++){
            let runColor = !1, runY = 0;
            const runHistory = [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            for(let y = 0; y < this.size; y++)this.modules[y][x] == runColor ? (runY++, runY == 5 ? result += QrCode.PENALTY_N1 : runY > 5 && result++) : (this.finderPenaltyAddHistory(runY, runHistory), runColor || (result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3), runColor = this.modules[y][x], runY = 1);
            result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
        }
        for(let y = 0; y < this.size - 1; y++)for(let x = 0; x < this.size - 1; x++){
            const color = this.modules[y][x];
            color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1] && (result += QrCode.PENALTY_N2);
        }
        let dark = 0;
        for (const row of this.modules)dark = row.reduce((sum, color)=>sum + (color ? 1 : 0), dark);
        const total = this.size * this.size, k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
        return assert(0 <= k && k <= 9), result += k * QrCode.PENALTY_N4, assert(0 <= result && result <= 2568888), result;
    }
    /*-- Private helper functions --*/ // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
        if (this.version == 1) return [];
        {
            const numAlign = Math.floor(this.version / 7) + 2, step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2, result = [
                6
            ];
            for(let pos = this.size - 7; result.length < numAlign; pos -= step)result.splice(1, 0, pos);
            return result;
        }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
        if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
        let result = (16 * ver + 128) * ver + 64;
        if (ver >= 2) {
            const numAlign = Math.floor(ver / 7) + 2;
            result -= (25 * numAlign - 10) * numAlign - 55, ver >= 7 && (result -= 36);
        }
        return assert(208 <= result && result <= 29648), result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
        return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
        if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
        const result = [];
        for(let i = 0; i < degree - 1; i++)result.push(0);
        result.push(1);
        let root = 1;
        for(let i = 0; i < degree; i++){
            for(let j = 0; j < result.length; j++)result[j] = QrCode.reedSolomonMultiply(result[j], root), j + 1 < result.length && (result[j] ^= result[j + 1]);
            root = QrCode.reedSolomonMultiply(root, 2);
        }
        return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
        const result = divisor.map((_)=>0);
        for (const b of data){
            const factor = b ^ result.shift();
            result.push(0), divisor.forEach((coef, i)=>result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
        }
        return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
        if (x >>> 8 || y >>> 8) throw new RangeError("Byte out of range");
        let z = 0;
        for(let i = 7; i >= 0; i--)z = z << 1 ^ (z >>> 7) * 285, z ^= (y >>> i & 1) * x;
        return assert(z >>> 8 == 0), z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
        const n = runHistory[1];
        assert(n <= this.size * 3);
        const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
        return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
        return currentRunColor && (this.finderPenaltyAddHistory(currentRunLength, runHistory), currentRunLength = 0), currentRunLength += this.size, this.finderPenaltyAddHistory(currentRunLength, runHistory), this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
        runHistory[0] == 0 && (currentRunLength += this.size), runHistory.pop(), runHistory.unshift(currentRunLength);
    }
    /*-- Constants and tables --*/ // The minimum version number supported in the QR Code Model 2 standard.
    static MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    static MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    static PENALTY_N1 = 3;
    static PENALTY_N2 = 3;
    static PENALTY_N3 = 40;
    static PENALTY_N4 = 10;
    static ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            7,
            10,
            15,
            20,
            26,
            18,
            20,
            24,
            30,
            18,
            20,
            24,
            26,
            30,
            22,
            24,
            28,
            30,
            28,
            28,
            28,
            28,
            30,
            30,
            26,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Low
        [
            -1,
            10,
            16,
            26,
            18,
            24,
            16,
            18,
            22,
            22,
            26,
            30,
            22,
            22,
            24,
            24,
            28,
            28,
            26,
            26,
            26,
            26,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28
        ],
        // Medium
        [
            -1,
            13,
            22,
            18,
            26,
            18,
            24,
            18,
            22,
            20,
            24,
            28,
            26,
            24,
            20,
            30,
            24,
            28,
            28,
            26,
            30,
            28,
            30,
            30,
            30,
            30,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Quartile
        [
            -1,
            17,
            28,
            22,
            16,
            22,
            28,
            26,
            26,
            24,
            28,
            24,
            28,
            22,
            24,
            24,
            30,
            28,
            28,
            26,
            28,
            30,
            24,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ]
    ];
    static NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            4,
            4,
            4,
            4,
            4,
            6,
            6,
            6,
            6,
            7,
            8,
            8,
            9,
            9,
            10,
            12,
            12,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            19,
            20,
            21,
            22,
            24,
            25
        ],
        // Low
        [
            -1,
            1,
            1,
            1,
            2,
            2,
            4,
            4,
            4,
            5,
            5,
            5,
            8,
            9,
            9,
            10,
            10,
            11,
            13,
            14,
            16,
            17,
            17,
            18,
            20,
            21,
            23,
            25,
            26,
            28,
            29,
            31,
            33,
            35,
            37,
            38,
            40,
            43,
            45,
            47,
            49
        ],
        // Medium
        [
            -1,
            1,
            1,
            2,
            2,
            4,
            4,
            6,
            6,
            8,
            8,
            8,
            10,
            12,
            16,
            12,
            17,
            16,
            18,
            21,
            20,
            23,
            23,
            25,
            27,
            29,
            34,
            34,
            35,
            38,
            40,
            43,
            45,
            48,
            51,
            53,
            56,
            59,
            62,
            65,
            68
        ],
        // Quartile
        [
            -1,
            1,
            1,
            2,
            4,
            4,
            4,
            5,
            6,
            8,
            8,
            11,
            11,
            16,
            16,
            18,
            16,
            19,
            21,
            25,
            25,
            25,
            34,
            30,
            32,
            35,
            37,
            40,
            42,
            45,
            48,
            51,
            54,
            57,
            60,
            63,
            66,
            70,
            74,
            77,
            81
        ]
    ];
}
function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len) throw new RangeError("Value out of range");
    for(let i = len - 1; i >= 0; i--)bb.push(val >>> i & 1);
}
function getBit(x, i) {
    return (x >>> i & 1) != 0;
}
function assert(cond) {
    if (!cond) throw new Error("Assertion error");
}
class QrSegment {
    /*-- Static factory functions (mid level) --*/ // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
        const bb = [];
        for (const b of data)appendBits(b, 8, bb);
        return new QrSegment(Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
        if (!QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
        const bb = [];
        for(let i = 0; i < digits.length;){
            const n = Math.min(digits.length - i, 3);
            appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb), i += n;
        }
        return new QrSegment(Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
        if (!QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
        const bb = [];
        let i;
        for(i = 0; i + 2 <= text.length; i += 2){
            let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
            temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1)), appendBits(temp, 11, bb);
        }
        return i < text.length && appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb), new QrSegment(Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
        return text == "" ? [] : QrSegment.isNumeric(text) ? [
            QrSegment.makeNumeric(text)
        ] : QrSegment.isAlphanumeric(text) ? [
            QrSegment.makeAlphanumeric(text)
        ] : [
            QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))
        ];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
        const bb = [];
        if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
        if (assignVal < 128) appendBits(assignVal, 8, bb);
        else if (assignVal < 16384) appendBits(2, 2, bb), appendBits(assignVal, 14, bb);
        else if (assignVal < 1e6) appendBits(6, 3, bb), appendBits(assignVal, 21, bb);
        else throw new RangeError("ECI assignment value out of range");
        return new QrSegment(Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
        return QrSegment.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
        return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    /*-- Constructor (low level) and fields --*/ // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData){
        if (this.mode = mode, this.numChars = numChars, this.bitData = bitData, numChars < 0) throw new RangeError("Invalid argument");
        this.bitData = bitData.slice();
    }
    /*-- Methods --*/ // Returns a new copy of the data bits of this segment.
    getData() {
        return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
        let result = 0;
        for (const seg of segs){
            const ccbits = seg.mode.numCharCountBits(version);
            if (seg.numChars >= 1 << ccbits) return 1 / 0;
            result += 4 + ccbits + seg.bitData.length;
        }
        return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
        str = encodeURI(str);
        const result = [];
        for(let i = 0; i < str.length; i++)str.charAt(i) != "%" ? result.push(str.charCodeAt(i)) : (result.push(parseInt(str.substring(i + 1, i + 3), 16)), i += 2);
        return result;
    }
    /*-- Constants --*/ // Describes precisely all strings that are encodable in numeric mode.
    static NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    static ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+./:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    static ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
}
class Ecc {
    /*-- Constants --*/ static LOW = new Ecc(0, 1);
    // The QR Code can tolerate about  7% erroneous codewords
    static MEDIUM = new Ecc(1, 0);
    // The QR Code can tolerate about 15% erroneous codewords
    static QUARTILE = new Ecc(2, 3);
    // The QR Code can tolerate about 25% erroneous codewords
    static HIGH = new Ecc(3, 2);
    // The QR Code can tolerate about 30% erroneous codewords
    /*-- Constructor and fields --*/ constructor(ordinal, formatBits){
        this.ordinal = ordinal, this.formatBits = formatBits;
    }
}
class Mode {
    /*-- Constants --*/ static NUMERIC = new Mode(1, [
        10,
        12,
        14
    ]);
    static ALPHANUMERIC = new Mode(2, [
        9,
        11,
        13
    ]);
    static BYTE = new Mode(4, [
        8,
        16,
        16
    ]);
    static KANJI = new Mode(8, [
        8,
        10,
        12
    ]);
    static ECI = new Mode(7, [
        0,
        0,
        0
    ]);
    /*-- Constructor and fields --*/ constructor(modeBits, numBitsCharCount){
        this.modeBits = modeBits, this.numBitsCharCount = numBitsCharCount;
    }
    /*-- Method --*/ // (Package-private) Returns the bit width of the character count field for a segment in
    // this mode in a QR Code at the given version number. The result is in the range [0, 16].
    numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
    }
}
const ERROR_LEVEL_MAP = {
    L: Ecc.LOW,
    M: Ecc.MEDIUM,
    Q: Ecc.QUARTILE,
    H: Ecc.HIGH
}, DEFAULT_SIZE = 128, DEFAULT_LEVEL = "L", DEFAULT_FGCOLOR = "#000000", DEFAULT_INCLUDEMARGIN = !1, DEFAULT_MINVERSION = 1, SPEC_MARGIN_SIZE = 4, DEFAULT_MARGIN_SIZE = 0;
function generatePath(modules, margin = 0) {
    const ops = [];
    return modules.forEach(function(row, y) {
        let start = null;
        row.forEach(function(cell, x) {
            if (!cell && start !== null) {
                ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`), start = null;
                return;
            }
            if (x === row.length - 1) {
                if (!cell) return;
                start === null ? ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`) : ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
                return;
            }
            cell && start === null && (start = x);
        });
    }), ops.join("");
}
function excavateModules(modules, excavation) {
    return modules.slice().map((row, y)=>y < excavation.y || y >= excavation.y + excavation.h ? row : row.map((cell, x)=>x < excavation.x || x >= excavation.x + excavation.w ? cell : !1));
}
function getImageSettings(cells, size, margin, logoSize) {
    if (!logoSize) return null;
    const scale = (cells.length + margin * 2) / size, w = logoSize * scale, h = logoSize * scale, x = cells.length / 2 - w / 2, y = cells.length / 2 - h / 2, floorX = Math.floor(x), floorY = Math.floor(y), ceilW = Math.ceil(w + x - floorX), ceilH = Math.ceil(h + y - floorY);
    return {
        x,
        y,
        h,
        w,
        excavation: {
            x: floorX,
            y: floorY,
            w: ceilW,
            h: ceilH
        }
    };
}
function getMarginSize(includeMargin, marginSize) {
    return marginSize != null ? Math.max(Math.floor(marginSize), 0) : includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
function useQRCode({ value, level, minVersion, includeMargin, marginSize, logoSize, size }) {
    const qrcode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQRCode.useMemo[qrcode]": ()=>{
            const segments = QrSegment.makeSegments(value);
            return QrCode.encodeSegments(segments, ERROR_LEVEL_MAP[level], minVersion);
        }
    }["useQRCode.useMemo[qrcode]"], [
        value,
        level,
        minVersion
    ]), { cells: cells_0, margin: margin_0, numCells: numCells_0, calculatedImageSettings: calculatedImageSettings_0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQRCode.useMemo": ()=>{
            const cells = qrcode.getModules(), margin = getMarginSize(includeMargin, marginSize), numCells = cells.length + margin * 2, calculatedImageSettings = getImageSettings(cells, size, margin, logoSize);
            return {
                cells,
                margin,
                numCells,
                calculatedImageSettings
            };
        }
    }["useQRCode.useMemo"], [
        qrcode,
        size,
        logoSize,
        includeMargin,
        marginSize
    ]);
    return {
        qrcode,
        margin: margin_0,
        cells: cells_0,
        numCells: numCells_0,
        calculatedImageSettings: calculatedImageSettings_0
    };
}
function QRCodeSVGComponent(props) {
    const { value, size = DEFAULT_SIZE, level = DEFAULT_LEVEL, color = DEFAULT_FGCOLOR, minVersion = DEFAULT_MINVERSION, title, logoSize } = props, marginSize = void 0, { margin, cells, numCells, calculatedImageSettings } = useQRCode({
        value,
        level,
        minVersion,
        includeMargin: DEFAULT_INCLUDEMARGIN,
        marginSize,
        logoSize,
        size
    }), cellsToDraw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QRCodeSVGComponent.useMemo[cellsToDraw]": ()=>logoSize && calculatedImageSettings?.excavation ? excavateModules(cells, calculatedImageSettings.excavation) : cells
    }["QRCodeSVGComponent.useMemo[cellsToDraw]"], [
        calculatedImageSettings?.excavation,
        cells,
        logoSize
    ]), fgPath = generatePath(cellsToDraw, margin);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        role: "img",
        children: [
            !!title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: title
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$0$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                fill: color,
                d: fgPath,
                shapeRendering: "crispEdges",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 2
                },
                exit: {
                    opacity: -1
                }
            })
        ]
    });
}
const QRCodeSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(QRCodeSVGComponent);
QRCodeSVG.displayName = "Memo(QRCodeSVG)";
;
 //# sourceMappingURL=QRCodeSVG.js.map
}}),
}]);

//# sourceMappingURL=97daa_%40sanity_presentation_dist__chunks-es_QRCodeSVG_d1d469.js.map