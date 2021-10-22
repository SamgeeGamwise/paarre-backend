export function resJson(payload: object | null) {
    if (payload == null) {
        return { success: true, data: {} }
    } else {
        return { success: true, data: payload }
    }
}

export function resList(payload: any[] | null) {
    if (payload == null) {
        return { success: true, data: [] }
    } else {
        return { success: true, data: payload }
    }
}

export function resMessage(payload: string) {
    return { success: true, data: payload }
}

export function errMessage(payload: string) {
    return { success: false, error: payload }
}
