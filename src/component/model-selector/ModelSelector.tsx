import React, { useState } from 'react';
import { Avatar, Button, Divider, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage } from '../../store/MessageData';
import chatConfig from '../../store/ChatConfig';
import gptIcon from '../../icon/gpt-icon.svg';
import baiduIcon from '../../icon/baidu-icon.png';
import xunfeiIcon from '../../icon/xunfei-icon.png';
import aliyunIcon from '../../icon/aliyun-icon.svg';
import googleIcon from '../../icon/google-icon.png';
import deepseekIcon from '../../icon/deepseek-icon.svg';

interface IProps {
  store?: IMessage;
  onChange?: (value: string) => void;
  value?: string;
  isPayment?: boolean;
}

const ModelSelector: React.FC<IProps> = observer(({ store, onChange, value, isPayment }) => {
  const [moreModules, setMoreModules] = useState(false);
  const { t } = useTranslation();

  const getIcon = (text: string, src: string) => (
    <div>
      <Avatar size='small' src={src} />
      &nbsp;{text}
    </div>
  );

  const getModulesDataSource = () => {
    const filterModels = chatConfig.chatModelList.filter(item => {
      if (isPayment) {
        return item.callTimerPrice > 0 && (moreModules || item.isMain);
      }
      return moreModules || item.isMain;
    });

    const modelGroups = [
      {
        label: getIcon(t('gpt'), gptIcon),
        options: filterModels.filter(item => item.channel === "gpt")
      },
      {
        label: getIcon(t('google'), googleIcon),
        options: filterModels.filter(item => item.channel === "google")
      },
      {
        label: getIcon(t('baidu'), baiduIcon),
        options: filterModels.filter(item => item.channel === "baidu")
      },
      // {
      //   label: getIcon(t('xunfei'), xunfeiIcon),
      //   options: filterModels.filter(item => item.channel === "xunfei")
      // },
      {
        label: getIcon(t('deepseek'), deepseekIcon),
        options: filterModels.filter(item => item.channel === "deepseek")
      },
      {
        label: getIcon(t('aliyun'), aliyunIcon),
        options: filterModels.filter(item => item.channel === "aliyun")
      }
    ];

    return chatConfig.enableSpeciousModel ? modelGroups.slice(0, 2).concat(modelGroups.slice(2)) : modelGroups.slice(2);
  };

  const handleChange = (model: string) => {
    if (!isPayment) {
      store?.setChatApiConfig("model", model);
    }
    onChange?.(model);
  };

  return (
    <Select
      style={{ width: 180 }}
      className="option-btn"
      onChange={handleChange}
      options={getModulesDataSource()}
      value={value ?? store?.chatApiConfig.model}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Button
            onClick={() => setMoreModules(!moreModules)}
            style={{ width: '100%' }}
            icon={<FontAwesomeIcon icon={faSearch} />}
            type="text"
          >
            &nbsp;{t(!moreModules ? "All" : "Main")}
          </Button>
        </>
      )}
    />
  );
});

export default ModelSelector;