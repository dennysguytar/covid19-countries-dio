import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData }) 
{
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => 
  (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )
  
  const country_label = COUNTRIES.filter( countryLabel => countryLabel.value === country ).map(countryLabel => countryLabel.label);
  //const textCovid19 = `País: ${country_label} - recuperados: ${recovered}`

  function textCovid19 (country, recovered)
  { 
    return `País: ${country} - recuperados: ${recovered.toLocaleString("pt-BR")}` 
  }

  const copyInfo = (valueText) => 
  {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    //dummy.value = textCovid19;
    dummy.value = textCovid19 (country_label, recovered)

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) 
    {
        dummy.contentEditable = true;
        dummy.readOnly = true;
        var range = document.createRange();
        range.selectNodeContents(dummy);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    else 
    {
        dummy.select();
    }

    document.execCommand("copy");
    document.body.removeChild(dummy);
    
    //navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => 
  {
    navigator.share
    (
      {
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19-countries-dio.netlify.app/'
      }
    )
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div id="painel">
          <div id="titulo1">
            <Typography variant="h4" component="span" color="primary">COVID19</Typography>
          </div>
          <div id="titulo2">
            <Typography variant="h5" component="span" color="primary">Painel Coronavírus</Typography>
          </div>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
          <div id="titulo3">
            <Typography variant="body2" component="span" color="primary">Última atualização em: {updateAt}</Typography>
            {navigatorHasShare ? renderShareButton : renderCopyButton}
          </div>
        </div>
        
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)