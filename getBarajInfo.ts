
export function getBarajInfo(barajAdi: string) {
    return fetch('https://www.iski.istanbul/web/waBarajGrafikleri/api/Detay?barajadi=' + barajAdi, {
        method: 'post'
        })
        .then(data => data.json())
}
