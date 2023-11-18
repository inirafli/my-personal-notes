import { useApp } from '../contexts/AppContext'

const useTextByLanguage = (textId, textEn) => {
  const { language } = useApp()
  return language === 'id' ? textId : textEn
}

export default useTextByLanguage
