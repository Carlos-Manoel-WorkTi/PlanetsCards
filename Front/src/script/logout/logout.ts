import { getTokenFromCookie } from "../cookies"

export default async function dologout() {
    try {
        const request = await fetch("http://localhost/PLC/Back/api/Routes/logout/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getTokenFromCookie()}`
            }
        });
        
        if (!request.ok) {
            throw new Error("Erro no logout");
        }

        const responseData = await request.json();

        if (responseData.success) {
            window.location.reload()
        } else {
            console.error('failed:', responseData.message);
            alert("Falha, verifique o console")
        }
    } catch (error) {
        console.error(error);
    }
}
