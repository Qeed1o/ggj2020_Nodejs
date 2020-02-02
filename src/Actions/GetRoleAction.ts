export function GetRoleAction(requestCount: number) : boolean {
    return Boolean(requestCount % 2);
}