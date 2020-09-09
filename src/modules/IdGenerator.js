export const idGenerator = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const id = [];
  for(let i = 0; i < length; i++){
    id.push(`${chars[Math.floor(Math.random() * 62)]}`)
  }
  return id.join('');
};