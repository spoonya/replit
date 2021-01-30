import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectLangsListProps {
  changeHandler: Function;
}

interface LangInfo {
  lang: string;
  value: string;
  extension: string;
}

interface LangList {
  langs: LangInfo[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    common: {
      fontSize: '1.8rem'
    }
  })
);

export default function ProjectLangsList({ changeHandler }: ProjectLangsListProps) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [lang, setLang] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const [langs, setLangs] = React.useState([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
    changeHandler(event.target.value as string);
  };

  useEffect(() => {
    async function fetchLangs() {
      const fetchOptions = {
        method: 'POST'
      };

      try {
        const url = `/langs`;
        const res = await fetch(url, fetchOptions);
        setLoaded(true);

        const langsInfo: LangList = await res.json();
        setLangs(langsInfo.langs);
      } catch (e) {
        console.log(e);
      }
    }

    fetchLangs();
  }, []);

  function renderLangList(): JSX.Element | JSX.Element[] {
    return langs.map((langInfo, i) => {
      return (
        <MenuItem key={i} className={classes.common} value={langInfo.value}>
          {langInfo.lang}
        </MenuItem>
      );
    });
  }

  return loaded ? (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.common}>{t('startDialog.language')}</InputLabel>
        <Select className={classes.common} value={lang} onChange={handleChange}>
          {renderLangList()}
        </Select>
      </FormControl>
    </div>
  ) : (
    <CircularProgress />
  );
}
