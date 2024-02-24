export function formateData(data: string): string {
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [ano, mes, dia] = data.split('-')
    const mesAbreviado = meses[parseInt(mes, 10) - 1]
    return `${mesAbreviado} ${parseInt(dia, 10)}, ${ano}`
}