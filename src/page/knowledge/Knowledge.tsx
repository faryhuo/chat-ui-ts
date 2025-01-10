import React, { useState, useRef, useEffect } from "react";
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import './Knowledge.less'
import { Badge, Button, Input, List, Space, Card, Tabs, message } from 'antd';
import Upload from '../../component/upload/Upload';
const { Search } = Input;
const { TabPane } = Tabs;

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
}

type IProps={
  config: IAppConfig;
  store: IMessage
}

const Knowledge:React.FC<IProps> = ({config,store})=>{
  const [documents, setDocuments] = useState<Document[]>([]);
  const [activeTab, setActiveTab] = useState('documents');
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadSuccess = (file: any) => {
    setDocuments(prev => [...prev, {
      id: file.uid,
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      uploadedAt: new Date().toLocaleString()
    }]);
    message.success(`${file.name} uploaded successfully`);
  };

  const handleSearch = async (value: string) => {
    setQuery(value);
    setIsLoading(true);
    try {
      // TODO: Implement RAG search
      const response = await fetch('/api/rag/search', {
        method: 'POST',
        body: JSON.stringify({ query: value })
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      message.error('Search failed');
    } finally {
      setIsLoading(false);
    }
  };


    return (
    <div className="knowledge-repo-container">
      <h2>Knowledge Repository <span>  
        <Badge
          className="site-badge-count-109"
          count={documents.length}
          style={{ backgroundColor: '#52c41a' }}
        />
      </span></h2>
      
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Documents" key="documents">
          <div className="action-button-list">
            <div className="k-action-button">
              <Search 
                placeholder="Search knowledge base" 
                enterButton="Search"
                onSearch={handleSearch}
                loading={isLoading}
              />
            </div>
            <div className="k-action-button">
            </div>
          </div>

          <div className="k-repo-list">
            <List
              dataSource={documents}
              renderItem={doc => (
                <List.Item>
                  <Card title={doc.name} size="small">
                    <p>Type: {doc.type}</p>
                    <p>Size: {doc.size}</p>
                    <p>Uploaded: {doc.uploadedAt}</p>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </TabPane>

        <TabPane tab="Q&A" key="qa">
          <div className="qa-container">
            <h3>Ask your question:</h3>
            <Search
              placeholder="Ask a question about your documents"
              enterButton="Ask"
              onSearch={handleSearch}
              loading={isLoading}
            />
            {answer && (
              <div className="answer-container">
                <h4>Answer:</h4>
                <p>{answer}</p>
              </div>
            )}
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Knowledge;
