
export const camelcaseToRegularForm = (text) => {
  return text.replace(/([A-Z])/g, ' $1')
             .replace(/^./, function(str){ return str.toUpperCase(); })
}
