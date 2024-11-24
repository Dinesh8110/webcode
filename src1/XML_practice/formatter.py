from lxml import etree

# Sample XML data
xml_data = '''
<library>
  <book>
    <title>XML Basics</title>
    <author>Tom Smith</author>
  </book>
  <book>
    <title>Advanced XML</title>
    <author>Susan Green</author>
  </book>
</library>
'''

# Parse the XML
root = etree.fromstring(xml_data)

# Execute XPath to select all titles
titles = root.xpath("/library/book/author/text()")

# Print each title
for title in titles:
    print(title)
