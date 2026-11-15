function parseJson(bytes) { try { return JSON.parse(bytes.toString()); } catch { return null; } }
export function inspect(bytes) { return { format: 'pcapng', sectionMagic: bytes.subarray(0,4).toString('hex'), byteOrderMagic: bytes.subarray(8,12).toString('hex') }; }
